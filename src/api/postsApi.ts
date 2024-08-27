import axios from "axios";
import { EduPostListData, JobPostListData } from "../types/PostDataType";

export interface FetchJobPostsParams {
  start?: number;
  limit?: number;
  empType?: string;
  enterType?: string;
  searchRegion?: string;
  searchJobCategory?: string;
  searchEnvEyesight?: string;
  searchEnvLstnTalk?: string;
  searchEnvLiftPower?: string;
  searchEnvBothHands?: string;
  sort?: string;
}

export interface JobPostsResponse {
  job_posts: JobPostListData[];
  total_count: number;
}

export interface EduPostsResponse {
  edu_posts: EduPostListData[];
  total_count: number;
}

export const fetchJobPostList = async (
  params?: FetchJobPostsParams
): Promise<JobPostsResponse> => {
  const { data } = await axios.get<JobPostsResponse>(
    "http://localhost:8000/job_posts/search",
    { params }
  );

  return data;
};

export const fetchEduPostList = async (): Promise<EduPostsResponse> => {
  const { data } = await axios.get<EduPostsResponse>(
    "http://127.0.0.1:8000/edu_posts/"
  );

  return data;
};
