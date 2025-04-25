import { supabase, Tables } from './supabase';

// Type for properties with relations
export type PropertyWithRelations = Tables['properties']['Row'] & {
  landlord?: Tables['users']['Row'] | null;
  agent?: Tables['users']['Row'] | null;
};

// Type for blogs with relations
export type BlogWithRelations = Tables['blogs']['Row'] & {
  author?: Tables['users']['Row'] | null;
};

// Properties API
export const fetchProperties = async (
  userId?: number,
  role?: string
): Promise<PropertyWithRelations[]> => {
  let query = supabase
    .from('properties')
    .select(`
      *,
      landlord:landlord_id(id, name, email, role, avatar),
      agent:agent_id(id, name, email, role, avatar)
    `);

  if (userId && role) {
    if (role === 'landlord') {
      query = query.eq('landlord_id', userId);
    } else if (role === 'agent') {
      query = query.eq('agent_id', userId);
    }
    // For admin or tenant, return all properties (no filter)
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
};

export const getProperty = async (id: number): Promise<PropertyWithRelations | null> => {
  const { data, error } = await supabase
    .from('properties')
    .select(`
      *,
      landlord:landlord_id(id, name, email, role, avatar),
      agent:agent_id(id, name, email, role, avatar)
    `)
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null; // Property not found, single() expects exactly one row
    }
    throw error;
  }
  
  return data;
};

export const createProperty = async (
  propertyData: Tables['properties']['Insert']
): Promise<Tables['properties']['Row']> => {
  const { data, error } = await supabase
    .from('properties')
    .insert([propertyData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateProperty = async (
  id: number,
  propertyData: Tables['properties']['Update']
): Promise<Tables['properties']['Row']> => {
  const { data, error } = await supabase
    .from('properties')
    .update({ ...propertyData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Blogs API
export const fetchBlogs = async (): Promise<BlogWithRelations[]> => {
  const { data, error } = await supabase
    .from('blogs')
    .select(`
      *,
      author:author_id(id, name, email, role, avatar)
    `)
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getBlog = async (id: number): Promise<BlogWithRelations | null> => {
  const { data, error } = await supabase
    .from('blogs')
    .select(`
      *,
      author:author_id(id, name, email, role, avatar)
    `)
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null; // Blog not found, single() expects exactly one row
    }
    throw error;
  }
  
  return data;
};

export const createBlog = async (
  blogData: Tables['blogs']['Insert']
): Promise<Tables['blogs']['Row']> => {
  const { data, error } = await supabase
    .from('blogs')
    .insert([blogData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateBlog = async (
  id: number,
  blogData: Tables['blogs']['Update']
): Promise<Tables['blogs']['Row']> => {
  const { data, error } = await supabase
    .from('blogs')
    .update({ ...blogData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Auth API
export const loginUser = async (
  email: string,
  password: string
): Promise<Tables['users']['Row'] & { session: string }> => {
  try {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      if (authError.message.includes('Invalid login')) {
        throw new Error('Invalid email or password. Please check your credentials and try again.');
      }
      throw authError;
    }

    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', authData.user?.id)
      .single();

    if (userError) {
      throw new Error('User account not found. Please contact support.');
    }

    return { ...userData, session: authData.session?.access_token || '' };
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (
  userData: {
    email: string;
    password: string;
    name: string;
    role: Tables['users']['Row']['role'];
    phone?: string;
  }
): Promise<Tables['users']['Row']> => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  if (authError) throw authError;

  if (!authData.user) {
    throw new Error('Failed to create user account');
  }

  const { data: profileData, error: profileError } = await supabase
    .from('users')
    .insert([
      {
        auth_id: authData.user.id,
        email: userData.email,
        name: userData.name,
        role: userData.role,
        phone: userData.phone,
      }
    ])
    .select()
    .single();

  if (profileError) throw profileError;

  return profileData;
};