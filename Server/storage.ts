import { users, properties, blogs } from "@shared/schema";
import { type User, type InsertUser, type Property, type InsertProperty, type Blog, type InsertBlog } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// Define the storage interface
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Property methods
  getProperties(userId?: number, role?: string): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  createProperty(property: InsertProperty): Promise<Property>;
  updateProperty(id: number, property: Partial<InsertProperty>): Promise<Property>;

  // Blog methods
  getBlogs(): Promise<Blog[]>;
  getBlog(id: number): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  updateBlog(id: number, blog: Partial<InsertBlog>): Promise<Blog>;
}

// Database storage implementation
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }

  // Property methods
  async getProperties(userId?: number, role?: string): Promise<Property[]> {
    let query = db.select().from(properties);
    
    if (userId && role) {
      if (role === "landlord") {
        query = query.where(eq(properties.landlordId, userId));
      } else if (role === "agent") {
        query = query.where(eq(properties.agentId, userId));
      }
    }
    
    const results = await query;
    return results;
  }

  async getProperty(id: number): Promise<Property | undefined> {
    const [property] = await db.select().from(properties).where(eq(properties.id, id));
    return property || undefined;
  }

  async createProperty(property: InsertProperty): Promise<Property> {
    const [newProperty] = await db.insert(properties).values(property).returning();
    return newProperty;
  }

  async updateProperty(id: number, property: Partial<InsertProperty>): Promise<Property> {
    const [updatedProperty] = await db
      .update(properties)
      .set(property)
      .where(eq(properties.id, id))
      .returning();
    return updatedProperty;
  }

  // Blog methods
  async getBlogs(): Promise<Blog[]> {
    const results = await db
      .select()
      .from(blogs)
      .orderBy(desc(blogs.createdAt));
    return results;
  }

  async getBlog(id: number): Promise<Blog | undefined> {
    const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));
    return blog || undefined;
  }

  async createBlog(blog: InsertBlog): Promise<Blog> {
    const [newBlog] = await db.insert(blogs).values(blog).returning();
    return newBlog;
  }

  async updateBlog(id: number, blog: Partial<InsertBlog>): Promise<Blog> {
    const [updatedBlog] = await db
      .update(blogs)
      .set(blog)
      .where(eq(blogs.id, id))
      .returning();
    return updatedBlog;
  }
}

// Export a singleton instance
export const storage = new DatabaseStorage();