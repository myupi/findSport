import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAdd, IDetailAdd, IPagination, ISport } from "src/models/IAdd";

interface append {
  sports: ISport[];
  pagination: IPagination;
}

interface data {
  data: IAdd[];
  append: append;
}

interface DetailData {
  data: IDetailAdd;
}

export const addAPI = createApi({
  reducerPath: "addAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://projects-findsport.pn32gk.easypanel.host/v1",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
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
    fetchClubs: build.query<data, {}>({
      query: ({}) => ({
        url: `/advertisements/clubs`,
      }),
    }),
    fetchGrounds: build.query<data, {}>({
      query: ({}) => ({
        url: `/advertisements/grounds`,
      }),
    }),
    fetchSections: build.query<data, {}>({
      query: ({}) => ({
        url: `/advertisements/clubs`,
      }),
    }),
    fetchFavourites: build.query<data, { uid: string }>({
      query: ({ uid = "www" }) => ({
        url: `/advertisements/like?uid=${uid}`,
      }),
    }),
    fetchDetail: build.query<DetailData, { id: number }>({
      query: ({ id }) => ({
        url: `/advertisements/${id}?uid=www`,
      }),
    }),
    postFavourite: build.mutation<DetailData, { id: number }>({
      query: ({ id }) => ({
        url: "/advertisements/like?uid=www",
        method: "POST",
        body: { favorite_id: id },
      }),
    }),
  }),
});
