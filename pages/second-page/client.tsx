import { IHeaders } from "@/types/common/type";

interface ISecondScreenClient {
  headers: IHeaders;
}

const SecondScreenClient = (props: ISecondScreenClient) => {
  const { headers } = props;
  return <div>Second Screen Client</div>;
};

export default SecondScreenClient;