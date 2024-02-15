import { IHeaders } from "@/types/common/type";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCommonState } from "../../state/context";
import { isEmpty } from "lodash";

interface IDashBoardClient {
  authHeaders?: IHeaders
}

const DashBoardClient = (props: IDashBoardClient) => {
  const { authHeaders = {} } = props;

  const globalState = useCommonState();

  const { headers } = globalState;
  const newHeaders = isEmpty(headers)
    ? authHeaders
    : headers;
  const router = useRouter();
  

  useEffect(() => {
    if (window.nativeAPI && window.nativeAPI.statusBarColor) {
      window.nativeAPI.statusBarColor("#ffffff");
    }
    console.log("====================================");
  console.log(newHeaders);
  console.log("====================================");
  window.Android.showToast('sdgdfgdffg')
  }, []);

  return (
    <div>
      <h1>Client Dashboard</h1>

      <Link href="/second-page/client" className="py-3">
        Go to webview by link
      </Link>
      <div>sfkjghfdkj</div>
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
