export type JobType = '백엔드' | '프론트' | '게임' | 'AI' | '디자이너' | 'PM';

export interface JobMatchData {
  title: JobType;
  similar: string; // 비슷한 성향
  compatible: string; // 잘 지내봐요 (찰떡궁합)
}

export const JOB_MATCH_DETAILS: Record<JobType, JobMatchData> = {
  백엔드: { title: '백엔드', similar: 'PM', compatible: '프론트개발자' },
  프론트: { title: '프론트', similar: '디자이너', compatible: '백엔드개발자' },
  게임: { title: '게임', similar: '게임개발자', compatible: '게임개발자' },
  AI: { title: 'AI', similar: 'AI개발자', compatible: 'AI개발자' },
  디자이너: { title: '디자이너', similar: 'PM', compatible: '프론트개발자' },
  PM: { title: 'PM', similar: '디자이너', compatible: '백엔드개발자' },
};