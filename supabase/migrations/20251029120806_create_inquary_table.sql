/*
  # Create inquary table for contact form submissions

  1. New Tables
    - `inquary`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text, required) - Name of the person submitting the inquiry
      - `company` (text, optional) - Company name
      - `position` (text, optional) - Job position/title
      - `phone` (text, required) - Contact phone number
      - `email` (text, required) - Contact email address
      - `message` (text, optional) - Inquiry message/details
      - `created_at` (timestamptz) - Timestamp when inquiry was submitted
      - `status` (text) - Status of inquiry (default: 'new')
  
  2. Security
    - Enable RLS on `inquary` table
    - Add policy for inserting inquiries (public access for form submissions)
    - Add policy for authenticated users to view all inquiries (admin access)

  3. Notes
    - Public can insert inquiries (for contact form)
    - Only authenticated users can view inquiries (for admin panel)
    - Indexes added for common query patterns
*/

CREATE TABLE IF NOT EXISTS inquary (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text DEFAULT '',
  position text DEFAULT '',
  phone text NOT NULL,
  email text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquary ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON inquary
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON inquary
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update inquiries"
  ON inquary
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS inquary_created_at_idx ON inquary(created_at DESC);
CREATE INDEX IF NOT EXISTS inquary_status_idx ON inquary(status);
CREATE INDEX IF NOT EXISTS inquary_email_idx ON inquary(email);