export const UPDATE_HEADERS = 'UPDATE_HEADERS' as const
export const SELECTED_BROKER_INDEX =
  'SELECTED_BROKER_INDEX' as const
export const UPDATE_ORDER_STATUS =
  'UPDATE_ORDER_STATUS' as const
export const APP_HEADERS = 'APP_HEADERS' as const
export const UPDATE_TERMINSURANCE =
  'UPDATE_TERMINSURANCE' as const
export const UPDATE_APP_HEADERS =
  'UPDATE_APP_HEADERS' as const
export const UPDATE_FINVU_CLIENT_SCRIPT_STATUS =
  'UPDATE_FINVU_CLIENT_SCRIPT_STATUS' as const
export const UPDATE_FINVU_PHONE_NUMBER =
  'UPDATE_FINVU_PHONE_NUMBER' as const
export const UPDATE_FINVU_HANDLE_ID =
  'UPDATE_FINVU_HANDLE_ID' as const
export const UPDATE_INSURANCE_DATA =
  'UPDATE_INSURANCE_DATA' as const
export const UPDATE_PROFILE_REQUEST_ID =
  'UPDATE_PROFILE_REQUEST_ID' as const
export const UPDATE_GLOBAL_STATE =
  'UPDATE_GLOBAL_STATE' as const
export const UPDATE_LANDING_URL =
  'UPDATE_LANDING_URL' as const
export const UPDATE_NATIVE_HEADERS =
  'UPDATE_NATIVE_HEADERS' as const
export const UPDATE_APP_TYPE = 'UPDATE_APP_TYPE' as const
export const ADD_TOAST = 'ADD_TOAST' as const
export const REMOVE_TOAST = 'REMOVE_TOAST' as const

interface IHeaders {
  Authorization?: string
  platform?: string
  contentType?: string
}

export interface INativeHeaders {
  Authorization?: string
  platform?: string
  version?: string
  memberId?: string
  hidenav?: string
}
interface IApplicationStatus {
  ipoLogo?: string
  ipoName?: string
  qty?: string
  orderId?: string
  bidPrice?: string
  orderDate?: string
  blockedAmount?: string
  primaryStatus?: string
  status?: string
  primaryStatusDesc?: string
  applicationNo?: string
  showCancel?: boolean
  statusIconUrl?: string
}
interface IOrderStatus {
  applicationStatus?: IApplicationStatus
}

interface IAPPHeaders {
  Authorization?: string
  platform?: string
  contentType?: string
  version?: string
  memberid?: string
}
interface ITermInsurance {
  browsePlanShow?: boolean
}

interface IInsuranceData {
  healthSuperTopUpSliderIndex?: number
  is_zcp_activated?: boolean
}

export interface Toast {
  id: number
  message: string
  type: ToastType
}

export enum ToastType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface IInitialState {
  url: string
  headers: IHeaders
  selectedIndex: number
  orderStatus: IOrderStatus
  appHeaders: IAPPHeaders
  terminsurance: ITermInsurance
  finvuScriptStatus: 'loading' | 'loaded' | 'error'
  finvuPhoneNumber: string
  finvuHandleId: string
  insuranceData: IInsuranceData
  profileRequestId: string
  landingUrl: string
  nativeHeaders: INativeHeaders
  appTypeName: string
  toasts: Toast[]
}

export type ACTIONTYPE =
  | {
      type: typeof SELECTED_BROKER_INDEX
      selectedIndex: number
    }
  | {
      type: typeof UPDATE_HEADERS
      headers: IHeaders
    }
  | { type: typeof APP_HEADERS; appHeaders: IAPPHeaders }
  | {
      type: typeof UPDATE_ORDER_STATUS
      orderStatus: IOrderStatus
    }
  | {
      type: typeof UPDATE_TERMINSURANCE
      terminsurance: ITermInsurance
    }
  | {
      type: typeof UPDATE_FINVU_CLIENT_SCRIPT_STATUS
      finvuScriptStatus: 'loading' | 'loaded' | 'error'
    }
  | {
      type: typeof UPDATE_FINVU_PHONE_NUMBER
      finvuPhoneNumber: string
    }
  | {
      type: typeof UPDATE_FINVU_HANDLE_ID
      finvuHandleId: string
    }
  | {
      type: typeof UPDATE_INSURANCE_DATA
      insuranceData: IInsuranceData
    }
  | {
      type: typeof UPDATE_PROFILE_REQUEST_ID
      profileRequestId: string
    }
  | {
      type: typeof UPDATE_GLOBAL_STATE
      data
    }
  | {
      type: typeof UPDATE_LANDING_URL
      landingUrl: string
    }
  | {
      type: typeof UPDATE_NATIVE_HEADERS
      nativeHeaders: INativeHeaders
    }
  | {
      type: typeof UPDATE_APP_TYPE
      appTypeName: string
    }
  | {
      type: typeof ADD_TOAST
      payload: Toast
    }
  | {
      type: typeof REMOVE_TOAST
      payload: number
    }
