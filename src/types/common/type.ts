export interface IHeaders {
    Authorization?: string
    platform?: string // 'web' | 'android' | 'ios'
    contentType?: string
    version?: string
    memberid?: number | string
    'x-amzn-trace-id'?: string
    'client-ip'?: string
  }

  export interface IAPPHeaders {
    Authorization?: string
    platform?: 'web' | 'android' | 'ios'
    contentType?: string
    memberid?: number | string
  }

  export interface INativeHeaders {
    Authorization?: string
    platform?: string
    version?: string
    memberId?: string
    hidenav?: string
  }