import express from 'express';
import { storage } from './storage';
import { insertPropertySchema, insertBlogSchema, insertUserSchema } from '@shared/schema';
import { z } from 'zod';

const router = express.Router();

// User routes
router.get('/api/users/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await storage.getUser(id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Property routes
router.get('/api/properties', async (req, res) => {
  try {
    const userId = req.query.userId ? parseInt(req.query.userId as string) : undefined;
    const role = req.query.role as string | undefined;
    
    const properties = await storage.getProperties(userId, role);
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

router.get('/api/properties/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const property = await storage.getProperty(id);
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    res.json(property);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ error: 'Failed to fetch property' });
  }
});

router.post('/api/properties', async (req, res) => {
  try {
    const propertyData = insertPropertySchema.parse(req.body);
    const newProperty = await storage.createProperty(propertyData);
    res.status(201).json(newProperty);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Failed to create property' });
  }
});

router.patch('/api/properties/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const propertyData = req.body;
    
    // Fetch the existing property to check if it exists
    const existingProperty = await storage.getProperty(id);
    if (!existingProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    const updatedProperty = await storage.updateProperty(id, propertyData);
    res.json(updatedProperty);
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ error: 'Failed to update property' });
  }
});

// Blog routes
router.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await storage.getBlogs();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

router.get('/api/blogs/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const blog = await storage.getBlog(id);
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    
    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

router.post('/api/blogs', async (req, res) => {
  try {
    const blogData = insertBlogSchema.parse(req.body);
    const newBlog = await storage.createBlog(blogData);
    res.status(201).json(newBlog);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

router.patch('/api/blogs/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const blogData = req.body;
    
    // Fetch the existing blog to check if it exists
    const existingBlog = await storage.getBlog(id);
    if (!existingBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    
    const updatedBlog = await storage.updateBlog(id, blogData);
    res.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

export default router;