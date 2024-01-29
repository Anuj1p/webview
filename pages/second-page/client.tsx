import { IHeaders } from "@/types/common/type";
import { useRouter } from "next/router";

interface ISecondScreenClient {
  headers: IHeaders;
}

const SecondScreenClient = (props: ISecondScreenClient) => {
  const { headers } = props;
  const router = useRouter();
  return (
    <>
      <button onClick={() => void router.back()}>Go Back</button>
      <div>Second Screen Client</div>
      <button
        onClick={() => {
          void router.push("/third-page/client");
        }}
      >
        Go to third page
      </button>
    </>
  );
};

export default SecondScreenClient;
