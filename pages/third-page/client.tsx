import { IHeaders } from "@/types/common/type";
import { useRouter } from "next/router";

interface IThirdScreenClient {
  headers: IHeaders;
}

const ThirdScreenClient = (props: IThirdScreenClient) => {
  const { headers } = props;
  const router = useRouter()
  return (
  <div>
    <button onClick={() => void router.back()}>Go Back</button>
    <div>Third Screen Client</div>
  </div>);
};

export default ThirdScreenClient;