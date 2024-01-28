import { IHeaders } from "@/types/common/type";

export const UPDATE_HEADERS = "UPDATE_HEADERS" as const;

export interface IInitialState {
  headers: IHeaders;
}

export type ACTIONTYPE = {
  type: typeof UPDATE_HEADERS;
  headers: IHeaders;
};
