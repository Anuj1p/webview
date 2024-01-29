import { getHeaders } from "@/utils/common-utils";
import ThirdScreenClient from "./client";
import { GetServerSidePropsContext } from "next";
import { IHeaders } from "@/types/common/type";
import { useEffect } from "react";
import { useCommonStateChanger } from "../../state/context";
import { UPDATE_HEADERS } from "../../state/types";

interface IThirdScreen {
  headers: IHeaders;
}

const ThirdScreen = (props: IThirdScreen) => {
  const { headers } = props;
  const dispatch = useCommonStateChanger();

  useEffect(() => {
    if (headers?.platform) {
      dispatch({
        type: UPDATE_HEADERS,
        headers,
      });
    }
  }, [headers, dispatch]);

  return <ThirdScreenClient headers={headers} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const headers = {
    ...getHeaders(context),
  };

  return {
    props: {
      headers,
    },
  };
}

export default ThirdScreen;
