import { SERVER_BASE_URL } from "./config.js";

export default class Model {
  async fetcher(url, opts) {
    try {
      const response = await fetch(`${SERVER_BASE_URL}${url}`, opts);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
      console.warn(error);
    }
  }
}
