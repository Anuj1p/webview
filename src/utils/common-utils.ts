import { GetServerSideProps, GetServerSidePropsContext } from "next";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    nativeAPI?: {
      showToast: (message: string) => void;
      statusBarColor: (color: string) => void;
    };
  }
}

export const getHeaders = (context: GetServerSidePropsContext) => {
  const { req, query } = context;
  const { authorization: Authorization = "", platform = "" } = {
    ...req.headers,
    ...query,
  };
  let headers = {};
  if (Authorization && platform) {
    headers = {
      Authorization,
      platform: Array.isArray(platform)
        ? (platform[0] as string).toLocaleUpperCase()
        : (platform as string)?.toLocaleUpperCase(),
    };
  } else {
    const token = (context.query.token ?? context.req.cookies.token) || "";
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
        platform: "web",
      };
    } else {
      console.error("Headers are missing", {
        Authorization,
        platform,
        url: req.url,
      });
    }
  }
  if (req.headers["x-amzn-trace-id"]) {
    headers["x-amzn-trace-id"] = req.headers["x-amzn-trace-id"];
  }
  return headers;
};

export const getAPPHeaders = (context: GetServerSidePropsContext) => {
  const newHeaders = getHeaders(context);
  const { req, query } = context;
  let { memberid = "" } = {
    ...req.headers,
    ...query,
  };
  if (memberid === "") {
    memberid = (context.query.memberId ?? context.req.cookies.memberId) || "";
  }
  return { ...newHeaders, memberid };
};

/* WARNING: While consuming these headers please extract the header values don't use it directly */
export const getNativeHeaders = (context: GetServerSidePropsContext) => {
  const newHeaders = getHeaders(context);
  const { req, query } = context;
  const {
    memberid = "",
    version = "",
    hidenav = "",
  } = {
    ...req.headers,
    ...query,
  };
  let mId = memberid;
  if (memberid === "") {
    mId = (context.query.memberId ?? context.req.cookies.memberId) || "";
  }
  return { ...newHeaders, version, memberid: mId, hidenav };
};
