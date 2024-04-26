import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAdd } from "src/models/IAdd";

interface data {
  data: IAdd[];
}

export const addAPI = createApi({
  reducerPath: "addAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://findsport.jscorp.uz/v1/advertisements",
  }),
  endpoints: (build) => ({
    fetchAllAdds: build.query<data, number>({
      query: (limit: number = 8) => ({
        url: "/all-ads",
        params: {
          limit: limit,
        },
      }),
    }),
    // fetchHomeAdds: build.query<data, number>({
    //   query: (limit: number = 8) => ({
    //     url: "/best-ads",
    //     params: {
    //       limit: limit,
    //     },
    //   }),
    // }),
  }),
});
