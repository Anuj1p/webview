import { GetServerSidePropsContext } from "next";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    nativeAPI?: {
      showToast: (message: string) => void;
      statusBarColor: (color: string) => void;
    }

  }}

export const getHeaders = (context: GetServerSidePropsContext) => {
  const { req } = context;
  const platform = req.headers.platform ?? "web";
  const headers = req.headers
  return {
    headers,
    platform,
  };
};
