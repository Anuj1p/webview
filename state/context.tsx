import { createContext, useContext } from "react";
import { initialState } from "./reducer";
import { ACTIONTYPE, IInitialState } from "./types";

export const CommonStateContext = createContext<IInitialState | undefined>(
  initialState
);

export function useCommonState() {
  const context = useContext<IInitialState | undefined>(CommonStateContext);
  if (context === undefined) {
    throw new Error(
      "useCommonStateChanger must be used within a useCommonStateChanger Provider"
    );
  }
  return context;
}

export const CommonStateChangerContext = createContext<
  React.Dispatch<ACTIONTYPE> | undefined
>(undefined);

export function useCommonStateChanger() {
  const context = useContext<React.Dispatch<ACTIONTYPE> | undefined>(
    CommonStateChangerContext
  );
  if (context === undefined) {
    throw new Error(
      "useCommonStateChanger must be used within a CommonStateChangerContext Provider"
    );
  }
  return context;
}
