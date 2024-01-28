import Link from "next/link";
import { initialState } from "../../state/reducer";
import { IHeaders } from "@/types/common/type";

interface IDashBoardClient {
  headers: IHeaders;
}

const DashBoardClient = (props: IDashBoardClient) => {
  const { headers } = props;
  console.log("====================================");
  console.log(headers);
  console.log("====================================");
  return (
    <div>
      <h1>Client Dashboard</h1>

      <Link href="/webview">Go to webview</Link>
    </div>
  );
};

export default DashBoardClient;
