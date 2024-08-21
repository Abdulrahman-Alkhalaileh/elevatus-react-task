export interface JobType {
  uuid: string;
  title: string;
  company_uuid: string;
  url: string;
  is_top: boolean;
  gpa: number;
  years_of_experience: any[];
  geolocation: {
    latitude: number;
    longitude: number;
  };
  willing_to_travel: boolean;
  willing_to_relocate: boolean;
  owns_a_car: boolean;
  visa_sponsorship: boolean;
  salary: {
    min: number;
    max: number;
  };
  gender: string | null;
  description: string;
  requirements: string;
  translations: any[];
  skills: any[];
  uri: string;
  posted_at: string;
  score: number;
  is_applied: boolean;
  applied_at: string | null;
  outside: boolean;
  has_profile: boolean;
  outside_key: string | null;
  hidden_columns: any[];
  job_type: string[];
  degree: any[];
  industry: any[];
  major: string[];
  nationality: any[];
  career_level: any[];
  languages: any[];
  location: {
    city: string | null;
    country: string | null;
  };
  category: string[];
}

export interface JobResults {
  jobs: JobType[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface DateTimeInfo {
  date: string;
  timezone_type: number;
  timezone: string;
}

// Define the type of response for the getJobs API to easily deal with the data
export interface JobTypeResponse {
  statusCode: number;
  message: string;
  results: JobResults;
  dateTime: DateTimeInfo;
}
