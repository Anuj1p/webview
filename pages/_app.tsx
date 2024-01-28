import { AppProps } from "next/app";
import { useReducer } from "react";
import { commonReducer, initialState } from "../state/reducer";
import {
  CommonStateChangerContext,
  CommonStateContext,
} from "../state/context";
// import '@src/styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [commonState, commonStateDispatch] = useReducer(
    commonReducer,
    initialState
  );
  return (
    <CommonStateContext.Provider value={commonState}>
      <CommonStateChangerContext.Provider value={commonStateDispatch}>
        <Component {...pageProps} />
      </CommonStateChangerContext.Provider>
    </CommonStateContext.Provider>
  );
};

export default MyApp;
