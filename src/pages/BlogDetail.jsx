import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { ArrowLeft, Twitter, Facebook, Link as LinkIcon, User, Calendar } from "lucide-react";
import { supabase } from "@/lib/supabase";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadBlog();
  }, [id]);

  const loadBlog = async () => {
    try {
      // First get user information
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("id", 1)  // Use the test user we set up
        .single();
        
      if (userError) console.error("Error fetching user:", userError);
      
      // Fetch directly from Supabase instead of using the API function
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      
      // Manually add author information
      const blogWithAuthor = {
        ...data,
        author: userData || { name: "Test User" }
      };
      
      console.log("BLOG DETAIL DATA:", blogWithAuthor);
      setBlog(blogWithAuthor);
      setLoading(false);
    } catch (error) {
      console.error("ERROR LOADING BLOG:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load blog post",
      });
      setLoading(false);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title || 'Check out this blog post';
    
    let shareUrl;
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url)
          .then(() => {
            toast({
              title: "Link copied",
              description: "The post URL has been copied to your clipboard",
            });
          })
          .catch((err) => {
            console.error('Failed to copy link:', err);
            toast({
              variant: "destructive",
              title: "Error",
              description: "Failed to copy link",
            });
          });
        return;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <p className="text-xl">Loading blog post...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Blog post not found</p>
          <Link to="/blogs">
            <Button>Back to Blogs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/blogs">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Blogs
            </Button>
          </Link>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-lg shadow-lg overflow-hidden"
        >
          {blog.image && (
            <div className="aspect-video relative">
              <img 
                className="w-full h-full object-cover"
                alt={`Blog post about ${blog.title}`}
                src={blog.image} 
              />
            </div>
          )}

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>By {blog.author?.name || 'Admin'}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{format(new Date(blog.created_at), "MMMM d, yyyy")}</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-line text-lg leading-relaxed">
                {blog.content}
              </p>
            </div>

            <div className="mt-10 border-t pt-6">
              <h2 className="text-xl font-bold mb-4">Share this article</h2>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter size={16} />
                  Share on Twitter
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook size={16} />
                  Share on Facebook
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => handleShare('copy')}
                >
                  <LinkIcon size={16} />
                  Copy Link
                </Button>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export default BlogDetail;