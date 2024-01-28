import { getHeaders } from "@/utils/common-utils";
import SecondScreenClient from "./client";
import { GetServerSidePropsContext } from "next";
import { IHeaders } from "@/types/common/type";
import { useEffect } from "react";
import { useCommonStateChanger } from "../../state/context";
import { UPDATE_HEADERS } from "../../state/types";

interface ISecondScreen {
  headers: IHeaders;
}

const SecondScreen = (props: ISecondScreen) => {
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

  return <SecondScreenClient headers={headers} />;
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

export default SecondScreen;
