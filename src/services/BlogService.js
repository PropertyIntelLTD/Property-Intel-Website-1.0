import { supabase } from '@/lib/supabase';

export class BlogService {
  /**
   * Get all blogs with author information
   */
  static async getBlogs() {
    try {
      // First get all blogs
      const { data: blogsData, error: blogsError } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (blogsError) throw blogsError;
      
      console.log("BLOG DATA FROM SUPABASE:", blogsData);
      
      // Get author data based on UUID in author_id
      if (blogsData.length > 0) {
        // Collect all author IDs that we need to fetch
        const authorIds = blogsData
          .map(blog => blog.author_id)
          .filter(id => id); // Filter out any null/undefined IDs
        
        if (authorIds.length > 0) {
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('id, name, email, role');
          
          if (userError) {
            console.error("Error fetching users:", userError);
          } else {
            console.log("USER DATA FROM SUPABASE:", userData);
            
            // Add author data to each blog by matching IDs
            return blogsData.map(blog => {
              // For each blog, find the matching author
              const author = userData.find(user => user.id === blog.author_id) || null;
              return {
                ...blog,
                author
              };
            });
          }
        }
      }
      
      return blogsData;
    } catch (error) {
      console.error("Error loading blogs:", error);
      throw error;
    }
  }
  
  /**
   * Get a single blog by ID
   */
  static async getBlog(id) {
    try {
      const { data: blog, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      
      // Get author data
      if (blog && blog.author_id) {
        const { data: author, error: authorError } = await supabase
          .from('users')
          .select('id, name, email, role')
          .eq('id', blog.author_id)
          .single();
          
        if (!authorError) {
          blog.author = author;
        } else {
          console.error("Error fetching user:", authorError);
          blog.author = { name: "Test User" }; // Fallback for display
        }
      }
      
      console.log("BLOG DETAIL DATA:", blog);
      return blog;
    } catch (error) {
      console.error(`Error getting blog ${id}:`, error);
      throw error;
    }
  }
  
  /**
   * Create a new blog post
   */
  static async createBlog(blogData) {
    try {
      // Remove summary field if it exists - our Supabase DB doesn't have it
      const { summary, image, ...blogDataWithoutExtraFields } = blogData;
      
      const { data, error } = await supabase
        .from('blogs')
        .insert([{
          ...blogDataWithoutExtraFields,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select();
      
      if (error) throw error;
      
      // If we had an image, we'll add it back to the returned data for UI consistency
      const returnData = { ...data[0] };
      if (image) {
        returnData.image = image;
      }
      
      return returnData;
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    }
  }
  
  /**
   * Update a blog post
   */
  static async updateBlog(id, blogData) {
    try {
      // Remove summary and image fields - our Supabase DB doesn't have them
      const { summary, image, ...blogDataWithoutExtraFields } = blogData;
      
      const { data, error } = await supabase
        .from('blogs')
        .update({
          ...blogDataWithoutExtraFields,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select();
      
      if (error) throw error;
      
      // If we had an image, we'll add it back to the returned data for UI consistency
      const returnData = { ...data[0] };
      if (image) {
        returnData.image = image;
      }
      
      return returnData;
    } catch (error) {
      console.error(`Error updating blog ${id}:`, error);
      throw error;
    }
  }
  
  /**
   * Delete a blog post
   */
  static async deleteBlog(id) {
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      return { id, deleted: true };
    } catch (error) {
      console.error(`Error deleting blog ${id}:`, error);
      throw error;
    }
  }
}

export default BlogService;