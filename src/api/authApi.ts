import baseApi from "./baseApi";

type SignUpBody = {
  fullName: string;
  email: string;
  password: string;
};

type LoginBody = {
  email: string;
  password: string;
};

const authApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data: SignUpBody) => ({
        url: "/user/sign-up",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data: LoginBody) => ({
        url: "/user/sign-in",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignupMutation, useLoginMutation } = authApiSlice;
