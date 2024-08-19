import axios from "axios";
import { JobTypeResponse } from "./types/job";

interface jobQueryParams {
  itemQuery?: string;
  limit?: number;
  page?: number;
}

export default class Jobs {
  protected baseUrl = process.env.REACT_APP_MAIN_DOMAIN as string;
  protected acceptAccount = process.env.REACT_APP_ACCEPT_ACCOUNT as string;
  protected acceptCompany = process.env.REACT_APP_ACCEPT_COMPANY as string;

  async getAllJobs({
    itemQuery,
    limit = 10,
    page = 0,
  }: jobQueryParams): Promise<JobTypeResponse> {
    try {
      const res = await axios.get(`${this.baseUrl}/api/v1/jobs`, {
        headers: {
          "accept-account": this.acceptAccount,
          "accept-company": this.acceptCompany,
          "Content-Type": "application/json",
        },
        params: {
          itemQuery,
          limit,
          page,
        },
      });
      return Promise.resolve(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
