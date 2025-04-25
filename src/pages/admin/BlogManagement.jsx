import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Eye, Pencil, Trash2, Plus, Check, X, Upload, Image as ImageIcon } from "lucide-react";
import BlogService from "@/services/BlogService";

function BlogManagement() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    published: false,
    image: null
  });
  const { toast } = useToast();

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      // Use BlogService to get blogs with author info
      const blogsData = await BlogService.getBlogs();
      
      console.log("BLOGS LOADED:", blogsData);
      setBlogs(blogsData || []);
      setLoading(false);
    } catch (error) {
      console.error("Error loading blogs:", error);
      toast({
        variant: "destructive",
        title: "Load failed",
        description: "Failed to load blog posts",
      });
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({ ...prev, published: checked }));
  };
  
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      setLoading(true);
      
      // Since we might not have a storage bucket created yet, let's use a public image hosting URL
      // This is a temporary solution until proper storage is set up
      
      // For now, we'll use a placeholder image URL based on the file name
      // In a production app, you'd connect to a proper storage service
      const imageUrl = `https://source.unsplash.com/random/800x600?${encodeURIComponent(file.name.split('.')[0])}`;
      
      // Update form data with the image URL
      setFormData(prev => ({ ...prev, image: imageUrl }));
      
      toast({
        title: "Image placeholder created",
        description: "A placeholder image has been generated",
      });
    } catch (error) {
      console.error("Error handling image:", error);
      toast({
        variant: "destructive",
        title: "Image handling failed",
        description: error.message || "Failed to process image",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      published: blog.published || false,
      image: blog.image
    });
  };

  const resetForm = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      content: "",
      published: false,
      image: null
    });
  };

  const handleDeleteBlog = async (blogId) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    
    try {
      await BlogService.deleteBlog(blogId);
      
      // Update local state
      setBlogs(prev => prev.filter(blog => blog.id !== blogId));
      
      toast({
        title: "Blog deleted",
        description: "Blog post has been deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast({
        variant: "destructive",
        title: "Delete failed",
        description: error.message || "Failed to delete blog post",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // For demo purposes, we'll use an existing user ID in the database that we know exists
      // This should match the user ID format in your Supabase users table
      const authorId = "d73465a6-08ca-4fd2-ad36-727add2c77e1"; // Using a UUID format

      const blogData = {
        title: formData.title,
        content: formData.content,
        published: formData.published,
        // Only update image field if it's changed
        ...(formData.image !== (editingBlog?.image || null) && { image: formData.image }),
        // Add the author ID
        author_id: authorId
      };

      let result;

      if (editingBlog) {
        // Update existing blog
        result = await BlogService.updateBlog(editingBlog.id, blogData);

        // Update local state
        setBlogs((prev) => 
          prev.map((blog) => 
            blog.id === editingBlog.id ? { ...blog, ...result } : blog
          )
        );

        toast({
          title: "Blog updated",
          description: "Blog post has been updated successfully",
        });
      } else {
        // Create new blog
        result = await BlogService.createBlog(blogData);

        // Update local state with the new blog
        setBlogs((prev) => [result, ...prev]);

        toast({
          title: "Blog created",
          description: "New blog post has been created successfully",
        });
      }

      // Reset form after successful submission
      resetForm();
      
      // Reload blogs to ensure we have all relations loaded
      loadBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
      toast({
        variant: "destructive",
        title: "Save failed",
        description: error.message || "Failed to save blog post",
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Blog Management</h1>
          <p className="text-gray-600">Create and manage your blog posts</p>
        </div>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title"
                  required
                />
              </div>



              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Enter the blog content"
                  required
                  rows={10}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Featured Image</Label>
                
                {formData.image && (
                  <div className="mb-2">
                    <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-md border">
                      <img 
                        src={formData.image} 
                        alt="Blog featured image" 
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, image: null }))}
                        className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Label 
                    htmlFor="image-upload" 
                    className="flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 hover:bg-muted"
                  >
                    <Upload size={16} />
                    <span>{formData.image ? "Change Image" : "Upload Image"}</span>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </Label>
                  
                  <Input
                    id="image-url"
                    name="image"
                    placeholder="Or enter image URL directly"
                    value={formData.image || ""}
                    onChange={handleInputChange}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="published"
                  checked={formData.published}
                  onCheckedChange={handleCheckboxChange}
                />
                <Label htmlFor="published" className="cursor-pointer">
                  Publish this blog post
                </Label>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex items-center gap-2">
                  {editingBlog ? (
                    <>
                      <Check size={16} />
                      Update Blog
                    </>
                  ) : (
                    <>
                      <Plus size={16} />
                      Create Blog
                    </>
                  )}
                </Button>
                {editingBlog && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={resetForm}
                    className="flex items-center gap-2"
                  >
                    <X size={16} />
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </div>

          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <h2 className="text-xl font-semibold p-6 pb-4 border-b">
              Blog Posts
            </h2>

            {loading ? (
              <div className="p-6 text-center">Loading blogs...</div>
            ) : blogs.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No blog posts found.
              </div>
            ) : (
              <div className="divide-y">
                {blogs.map((blog) => (
                  <div key={blog.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-row gap-4">
                      {blog.image && (
                        <div className="hidden sm:block h-20 w-32 flex-shrink-0 overflow-hidden rounded-md">
                          <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-grow">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{blog.title}</h3>
                          {!blog.published && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                              Draft
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{blog.content}</p>
                        <div className="text-gray-500 text-xs mt-2">
                          {blog.author?.name ? `By ${blog.author.name} • ` : ""}
                          {format(new Date(blog.created_at), "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2 md:mt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`/blogs/${blog.id}`, '_blank')}
                        className="flex items-center gap-1"
                      >
                        <Eye size={14} />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditBlog(blog)}
                        className="flex items-center gap-1"
                      >
                        <Pencil size={14} />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="flex items-center gap-1 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={14} />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BlogManagement;