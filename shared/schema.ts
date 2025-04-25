import { pgTable, serial, text, timestamp, boolean, uuid, integer, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User related types
export const userRoleEnum = pgEnum("user_role", ["admin", "agent", "landlord", "tenant"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  authId: text("auth_id").unique().notNull(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  phone: text("phone"),
  role: userRoleEnum("role").default("tenant").notNull(),
  avatar: text("avatar"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Property related types
export const propertyStatusEnum = pgEnum("property_status", ["For Rent", "For Sale", "Sold", "Rented"]);
export const propertyTypeEnum = pgEnum("property_type", ["Apartment", "House", "Villa", "Loft", "Studio", "Penthouse", "Cottage"]);

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  postcode: text("postcode").notNull(),
  country: text("country").default("United Kingdom").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  size: integer("size").notNull(), // in square feet
  rent: integer("rent"), // monthly rent in GBP
  price: integer("price"), // sale price in GBP
  status: propertyStatusEnum("status").default("For Rent").notNull(),
  type: propertyTypeEnum("type").default("Apartment").notNull(),
  featured: boolean("featured").default(false).notNull(),
  image: text("image"),
  landlordId: integer("landlord_id").references(() => users.id),
  agentId: integer("agent_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertPropertySchema = createInsertSchema(properties).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;

// Blog related types
export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  summary: text("summary").notNull(),
  image: text("image"),
  authorId: integer("author_id").references(() => users.id),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertBlogSchema = createInsertSchema(blogs).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
export type InsertBlog = z.infer<typeof insertBlogSchema>;
export type Blog = typeof blogs.$inferSelect;

// Relations
export const propertyRelations = {
  landlord: (properties) => ({
    columns: { landlordId: true },
    references: () => users,
  }),
  agent: (properties) => ({
    columns: { agentId: true },
    references: () => users,
  }),
};

export const blogRelations = {
  author: (blogs) => ({
    columns: { authorId: true },
    references: () => users,
  }),
};