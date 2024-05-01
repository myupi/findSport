import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAdd } from "src/models/IAdd";

interface data {
  data: IAdd[];
}

export const addAPI = createApi({
  reducerPath: "addAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://findsport.jscorp.uz/v1",
  }),
  endpoints: (build) => ({
    fetchAllAdds: build.query<data, number>({
      query: () => ({
        url: "/advertisements/all-ads",
      }),
    }),
    fetchBestAdds: build.query<data, string>({
      query: () => ({
        url: "/advertisements/best-ads",
      }),
    }),
  }),
});
