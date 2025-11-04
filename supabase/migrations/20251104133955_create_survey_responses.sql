/*
  # Create survey responses table

  1. New Tables
    - `survey_responses`
      - `id` (uuid, primary key)
      - `q1_reasons` (text array) - AI 도입 못한 이유들
      - `q1_other` (text) - 기타 이유
      - `q2_roi_criteria` (text array) - ROI 판단 기준들
      - `q2_other` (text) - 기타 ROI 기준
      - `q2_example` (text) - ROI 예시 답변
      - `q3_budget` (text) - 지불 의사 금액대
      - `q3_example` (text) - 금액 예시 답변
      - `q4_business_process` (text) - 주요 업무 프로세스
      - `q5_routine_tasks` (text array) - 반복 작업들
      - `q5_other` (text) - 기타 반복 작업
      - `q5_example` (text) - 반복 작업 예시
      - `q6_core_skills` (text) - 발전시키고 싶은 핵심 업무
      - `q7_time_required` (text) - 작업 소요 시간
      - `q8_cost_resources` (text) - 비용/리소스
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `survey_responses` table
    - Add policy for anyone to insert survey responses
    - Add policy for authenticated users to view all responses
*/

CREATE TABLE IF NOT EXISTS survey_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  q1_reasons text[] DEFAULT '{}',
  q1_other text DEFAULT '',
  q2_roi_criteria text[] DEFAULT '{}',
  q2_other text DEFAULT '',
  q2_example text DEFAULT '',
  q3_budget text DEFAULT '',
  q3_example text DEFAULT '',
  q4_business_process text DEFAULT '',
  q5_routine_tasks text[] DEFAULT '{}',
  q5_other text DEFAULT '',
  q5_example text DEFAULT '',
  q6_core_skills text DEFAULT '',
  q7_time_required text DEFAULT '',
  q8_cost_resources text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert survey responses"
  ON survey_responses
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view survey responses"
  ON survey_responses
  FOR SELECT
  TO authenticated
  USING (true);
