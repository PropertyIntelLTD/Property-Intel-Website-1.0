import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Upload, ImagePlus, Check, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

const BlogImageUpload = ({ blogId, currentImage, onImageUpdate }) => {
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(currentImage || null);
  const { toast } = useToast();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast({
        variant: "destructive",
        title: "Invalid file",
        description: "Please select an image file",
      });
      return;
    }

    // Check file size (3MB max)
    if (file.size > 3 * 1024 * 1024) {
      toast({
        variant: "destructive",
        title: "File too large",
        description: "Please select an image smaller than 3MB",
      });
      return;
    }

    setImageFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const uploadImage = async () => {
    if (!imageFile || !blogId) return;

    try {
      setUploading(true);

      // Generate a unique filename
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `blog-${blogId}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `blogs/${fileName}`;

      // Upload to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, imageFile);

      if (uploadError) {
        throw uploadError;
      }

      // Get the public URL
      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      const imageUrl = data.publicUrl;

      // Update the blog record with the new image URL
      const { error: updateError } = await supabase
        .from('blogs')
        .update({ image: imageUrl })
        .eq('id', blogId);

      if (updateError) {
        throw updateError;
      }

      // Notify parent component
      if (onImageUpdate) {
        onImageUpdate(imageUrl);
      }

      toast({
        title: "Image uploaded",
        description: "Blog image has been updated successfully",
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: error.message || "Failed to upload image",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeImage = async () => {
    if (!blogId) return;

    try {
      setUploading(true);

      // Update the blog record to remove the image
      const { error } = await supabase
        .from('blogs')
        .update({ image: null })
        .eq('id', blogId);

      if (error) {
        throw error;
      }

      // Reset states
      setImageFile(null);
      setImagePreview(null);

      // Notify parent component
      if (onImageUpdate) {
        onImageUpdate(null);
      }

      toast({
        title: "Image removed",
        description: "Blog image has been removed successfully",
      });
    } catch (error) {
      console.error("Error removing image:", error);
      toast({
        variant: "destructive",
        title: "Remove failed",
        description: error.message || "Failed to remove image",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="blog-image">Blog Image</Label>
        <Input
          id="blog-image"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="cursor-pointer"
        />
        <p className="text-sm text-gray-500">
          Upload a featured image for this blog post (max 3MB)
        </p>
      </div>

      {imagePreview && (
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden rounded-md border bg-gray-100">
            <img
              src={imagePreview}
              alt="Blog preview"
              className="h-full w-full object-cover"
            />
          </div>
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600 focus:outline-none"
            disabled={uploading}
            title="Remove image"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {imageFile && (
        <Button
          onClick={uploadImage}
          disabled={uploading}
          className="flex items-center gap-2"
        >
          {uploading ? (
            <>Uploading...</>
          ) : (
            <>
              <Upload size={16} />
              Upload Image
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default BlogImageUpload;