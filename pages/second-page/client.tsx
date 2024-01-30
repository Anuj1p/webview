import { IHeaders } from "@/types/common/type";
import Link from "next/link";
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
      <h2>Second Screen Client</h2>
      <Link href='/third-page/client' className="py-3">Go to Third page by link</Link>
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
