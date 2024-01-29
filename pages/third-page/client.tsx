import { IHeaders } from "@/types/common/type";

interface IThirdScreenClient {
  headers: IHeaders;
}

const ThirdScreenClient = (props: IThirdScreenClient) => {
  const { headers } = props;
  return <div>Third Screen Client</div>;
};

export default ThirdScreenClient;