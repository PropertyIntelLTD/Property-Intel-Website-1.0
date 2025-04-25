
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fetchBlogs } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { BookOpen, Clock, User } from "lucide-react";

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const data = await fetchBlogs();
      console.log("BLOG DATA FROM SUPABASE:", data);
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.error("ERROR FETCHING BLOGS:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load blog posts",
      });
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <p className="text-xl">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-primary/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Real Estate Insights
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest articles, market updates, and property insights.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/blogs/${blog.id}`}>
                <div className="aspect-video relative">
                  <img 
                    className="w-full h-full object-cover"
                    alt={`Blog post about ${blog.title}`}
                    src={blog.image || "https://images.unsplash.com/photo-1562021536-4cf14536f213"} />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 line-clamp-2">
                    {blog.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{blog.author?.name || "Admin"}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{format(new Date(blog.created_at), "MMMM d, yyyy")}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.content}
                  </p>
                  <div className="flex items-center text-primary">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Read More</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-primary/5 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Want to learn more about real estate? Check out our latest properties or get in touch with us.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/properties">
              <Button size="lg">View Properties</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">Contact Us</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogsPage;
