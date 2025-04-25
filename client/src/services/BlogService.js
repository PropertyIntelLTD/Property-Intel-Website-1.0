import { supabase } from '../lib/supabase';

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
      
      // Get author data from the integer ID we have
      if (blogsData.length > 0) {
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*');
          
        if (userError) {
          console.error("Error fetching users:", userError);
        }
        
        // Add author data to each blog by matching IDs
        if (userData && userData.length > 0) {
          return blogsData.map(blog => {
            const author = userData.find(user => user.id === blog.author_id) || null;
            return {
              ...blog,
              author
            };
          });
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
          .select('*')
          .eq('id', blog.author_id)
          .single();
          
        if (!authorError) {
          blog.author = author;
        }
      }
      
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
      // Make sure we include a summary field as required by DB schema
      if (!blogData.summary) {
        blogData.summary = blogData.content.substring(0, 150) + '...';
      }
      
      const { data, error } = await supabase
        .from('blogs')
        .insert([{
          ...blogData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select();
      
      if (error) throw error;
      
      return data[0];
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
      // Make sure we include a summary field as required by DB schema
      if (!blogData.summary) {
        blogData.summary = blogData.content.substring(0, 150) + '...';
      }
      
      const { data, error } = await supabase
        .from('blogs')
        .update({
          ...blogData,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select();
      
      if (error) throw error;
      
      return data[0];
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