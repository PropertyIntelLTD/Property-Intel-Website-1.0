export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: number
          name: string
          description: string
          address: string
          city: string
          postcode: string
          country: string
          bedrooms: number
          bathrooms: number
          size: number
          rent: number | null
          price: number | null
          status: "For Rent" | "For Sale" | "Sold" | "Rented"
          type: "Apartment" | "House" | "Villa" | "Loft" | "Studio" | "Penthouse" | "Cottage"
          featured: boolean
          image: string | null
          landlord_id: number | null
          agent_id: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          description: string
          address: string
          city: string
          postcode: string
          country?: string
          bedrooms: number
          bathrooms: number
          size: number
          rent?: number | null
          price?: number | null
          status?: "For Rent" | "For Sale" | "Sold" | "Rented"
          type?: "Apartment" | "House" | "Villa" | "Loft" | "Studio" | "Penthouse" | "Cottage"
          featured?: boolean
          image?: string | null
          landlord_id?: number | null
          agent_id?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          description?: string
          address?: string
          city?: string
          postcode?: string
          country?: string
          bedrooms?: number
          bathrooms?: number
          size?: number
          rent?: number | null
          price?: number | null
          status?: "For Rent" | "For Sale" | "Sold" | "Rented"
          type?: "Apartment" | "House" | "Villa" | "Loft" | "Studio" | "Penthouse" | "Cottage"
          featured?: boolean
          image?: string | null
          landlord_id?: number | null
          agent_id?: number | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_agent_id_fkey"
            columns: ["agent_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "properties_landlord_id_fkey"
            columns: ["landlord_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      blogs: {
        Row: {
          id: number
          title: string
          content: string
          summary: string
          image: string | null
          author_id: number | null
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          content: string
          summary: string
          image?: string | null
          author_id?: number | null
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          content?: string
          summary?: string
          image?: string | null
          author_id?: number | null
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blogs_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          id: number
          auth_id: string
          name: string
          email: string
          phone: string | null
          role: "admin" | "agent" | "landlord" | "tenant"
          avatar: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          auth_id: string
          name: string
          email: string
          phone?: string | null
          role?: "admin" | "agent" | "landlord" | "tenant"
          avatar?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          auth_id?: string
          name?: string
          email?: string
          phone?: string | null
          role?: "admin" | "agent" | "landlord" | "tenant"
          avatar?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: "admin" | "agent" | "landlord" | "tenant"
      property_status: "For Rent" | "For Sale" | "Sold" | "Rented"
      property_type: "Apartment" | "House" | "Villa" | "Loft" | "Studio" | "Penthouse" | "Cottage"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}