// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />

interface ImportMetaEnvironment {
  readonly NODE_ENV: string;
  readonly REACT_APP_NAME: string;
  readonly REACT_APP_PUBLIC_URL: string;
  readonly REACT_APP_API_URI: string;
  readonly REACT_APP_JWT_STORAGE_KEY: string;
  // more env variables...
}
