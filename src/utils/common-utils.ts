import { GetServerSidePropsContext } from "next";

export const getHeaders = (context: GetServerSidePropsContext) => {
  const { req } = context;
  const platform = req.headers.platform ?? "web";

  return {
    platform,
  };
};
