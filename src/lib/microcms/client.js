import { createClient } from "microcms-js-sdk";

// .envの環境変数を呼び出している
export const client = createClient({
  serviceDomain: process.env.REACT_APP_SERVICE_DOMAIN,
  apiKey: process.env.REACT_APP_API_KEY,
})
