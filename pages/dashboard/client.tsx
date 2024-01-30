import { IHeaders } from "@/types/common/type";
import Link from "next/link";
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

      <Link href='/second-page/client' className="py-3">Go to webview by link</Link>
      <button
        onClick={() => {
          if (window.nativeAPI && window.nativeAPI.showToast) {
            window.nativeAPI.showToast("Hello from WebView!");
          }
          void router.push("/second-page/client");
        }}
      >
        Go to webview
      </button>
    </div>
  );
};

export default DashBoardClient;
