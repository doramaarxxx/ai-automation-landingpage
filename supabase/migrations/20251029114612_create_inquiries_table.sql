/*
  # Create inquiries table for landing page submissions

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text, required) - Inquirer's name
      - `company` (text, optional) - Company name
      - `position` (text, optional) - Job position/title
      - `phone` (text, required) - Contact phone number
      - `email` (text, required) - Contact email address
      - `message` (text, optional) - Inquiry message content
      - `status` (text, default 'pending') - Inquiry status (pending, contacted, completed)
      - `email_sent` (boolean, default false) - Whether confirmation email was sent
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for inserting inquiries (public access for form submissions)
    - Add policy for reading inquiries (authenticated admin only)
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  position text,
  phone text NOT NULL,
  email text NOT NULL,
  message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed')),
  email_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit inquiries (public form)
CREATE POLICY "Anyone can submit inquiries"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admins) can view inquiries
CREATE POLICY "Authenticated users can view all inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update inquiry status
CREATE POLICY "Authenticated users can update inquiries"
  ON inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);