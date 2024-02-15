import { getAPPHeaders, getHeaders } from "@/utils/common-utils";
import DashBoardClient from "./client";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { IAPPHeaders, IHeaders, INativeHeaders } from "@/types/common/type";
import { useEffect } from "react";
import { useCommonStateChanger } from "../../state/context";
import { UPDATE_GLOBAL_STATE, UPDATE_HEADERS, UPDATE_NATIVE_HEADERS } from "../../state/types";

interface IDashBoard {
  headers: IHeaders;
  appHeaders: IAPPHeaders;
  nativeHeaders: INativeHeaders;
}

const DashBoard = (props: IDashBoard) => {
  const { headers = {}, appHeaders = {}, nativeHeaders = {} } = props;
  const dispatch = useCommonStateChanger();

  useEffect(() => {
    if (headers.Authorization) {
      dispatch({
        type: UPDATE_GLOBAL_STATE,
        data: {
          headers,
          appHeaders,
        },
      });
      dispatch({
        type: UPDATE_NATIVE_HEADERS,
        nativeHeaders,
      });
    }
  }, [headers, appHeaders, nativeHeaders, dispatch]);

  return <DashBoardClient authHeaders={headers} />;
};

export const getServerSideProps: GetServerSideProps<{
  headers: IHeaders;
}> = async (context: GetServerSidePropsContext) => {
  const headers: IHeaders = getHeaders(context);
  const appHeaders: IHeaders = getAPPHeaders(context);
  return {
    props: {
      headers,
      appHeaders,
    },
  };
};

export default DashBoard;
