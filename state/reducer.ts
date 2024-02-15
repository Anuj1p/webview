import {
  SELECTED_BROKER_INDEX,
  UPDATE_HEADERS,
  UPDATE_ORDER_STATUS,
  APP_HEADERS,
  IInitialState,
  ACTIONTYPE,
  UPDATE_TERMINSURANCE,
  UPDATE_FINVU_CLIENT_SCRIPT_STATUS,
  UPDATE_FINVU_PHONE_NUMBER,
  UPDATE_FINVU_HANDLE_ID,
  UPDATE_INSURANCE_DATA,
  UPDATE_PROFILE_REQUEST_ID,
  UPDATE_GLOBAL_STATE,
  UPDATE_LANDING_URL,
  UPDATE_NATIVE_HEADERS,
  UPDATE_APP_TYPE,
  ADD_TOAST,
  REMOVE_TOAST,
} from './types'

export const initialState: IInitialState = {
  url: '',
  headers: {},
  selectedIndex: 0,
  orderStatus: {},
  appHeaders: {},
  terminsurance: {},
  finvuScriptStatus: 'loading',
  finvuPhoneNumber: '',
  finvuHandleId: '',
  insuranceData: {},
  profileRequestId: '',
  landingUrl: '',
  nativeHeaders: {},
  appTypeName: '',
  toasts: [],
}

export function commonReducer(
  state: IInitialState = initialState,
  action: ACTIONTYPE,
) {
  switch (action.type) {
    case UPDATE_HEADERS:
      return {
        ...state,
        headers: action.headers,
      }
    case APP_HEADERS:
      return {
        ...state,
        appHeaders: action.appHeaders,
      }
    case SELECTED_BROKER_INDEX:
      return {
        ...state,
        selectedIndex: action.selectedIndex,
      }
    case UPDATE_ORDER_STATUS:
      return {
        ...state,
        orderStatus: action.orderStatus,
      }
    case UPDATE_TERMINSURANCE:
      return {
        ...state,
        terminsurance: {
          ...state.terminsurance,
          ...action.terminsurance,
        },
      }
    case UPDATE_FINVU_CLIENT_SCRIPT_STATUS:
      return {
        ...state,
        finvuScriptStatus: action.finvuScriptStatus,
      }
    case UPDATE_FINVU_PHONE_NUMBER:
      return {
        ...state,
        finvuPhoneNumber: action.finvuPhoneNumber,
      }
    case UPDATE_FINVU_HANDLE_ID:
      return {
        ...state,
        finvuHandleId: action.finvuHandleId,
      }

    case UPDATE_INSURANCE_DATA:
      return {
        ...state,
        insuranceData: {
          ...state.insuranceData,
          ...action.insuranceData,
        },
      }
    case UPDATE_PROFILE_REQUEST_ID:
      return {
        ...state,
        profileRequestId: action.profileRequestId,
      }
    case UPDATE_GLOBAL_STATE:
      return {
        ...state,
        ...action.data,
      }
    case UPDATE_LANDING_URL:
      return {
        ...state,
        landingUrl: action.landingUrl,
      }
    case UPDATE_NATIVE_HEADERS:
      return {
        ...state,
        nativeHeaders: action.nativeHeaders,
      }
    case UPDATE_APP_TYPE:
      return {
        ...state,
        appTypeName: action.appTypeName,
      }
    case ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      }
    case REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter(
          toast => toast.id !== action.payload,
        ),
      }
    default:
      return state
  }
}
