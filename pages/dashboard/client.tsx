import { IHeaders } from "@/types/common/type";
import { useRouter } from "next/router";

interface IDashBoardClient {
  headers: IHeaders;
}

const DashBoardClient = (props: IDashBoardClient) => {
  const { headers } = props;
  const router = useRouter();
  console.log("====================================");
  console.log(headers);
  console.log("====================================");
  return (
    <div>
      <h1>Client Dashboard</h1>

      <button onClick={() => {
        void router.push('/second-page/client')
      }}>Go to webview</button>
    </div>
  );
};

export default DashBoardClient;
