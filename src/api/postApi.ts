import { Option } from "../components/form-builder";
import baseApi from "./baseApi";

type CreatePostBody = {
  title: string;
  content: string;
  keywords: Option[];
};

const postApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data: CreatePostBody) => ({
        url: "/post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Posts"],
    }),
    queryPosts: builder.query({
      query: () => "/post",
      providesTags: ["Posts"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreatePostMutation, useQueryPostsQuery } = postApiSlice;
