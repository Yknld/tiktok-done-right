-- Create waitlist_submissions table
CREATE TABLE public.waitlist_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  promoting TEXT,
  country TEXT,
  city TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (no auth required for waitlist signup)
CREATE POLICY "Anyone can submit to waitlist" 
ON public.waitlist_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading for authenticated admin users (you can adjust this later)
CREATE POLICY "Only admins can view submissions" 
ON public.waitlist_submissions 
FOR SELECT 
USING (false);