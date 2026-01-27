import { createDataProvider, CreateDataProviderOptions } from "@refinedev/rest";
import { BACKEND_BASE_URL } from "../constants";
import { ListResponse } from "@/types";

const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: (resource) => {
      console.log("getEndpoint called with resource:", resource, "type:", typeof resource);
      let name = "";
      if (typeof resource === "string") {
        name = resource;
      } else if (resource && typeof resource === "object") {
        // Extract from nested resource property or direct name/route
        name = (resource as any).resource || (resource as any).name || (resource as any).route || "";
      }
      const endpoint = String(name).replace(/^\/+/, "");
      console.log("getEndpoint returning:", endpoint);
      return endpoint;
    },

    mapResponse: async (response) => {
      const payload: ListResponse = await response.json();
      console.log("Response data:", payload);
      return payload.data ?? [];
    },
  }
}

console.log("BACKEND_BASE_URL initialized as:", BACKEND_BASE_URL);

// Create and export the data provider.
const { dataProvider } = createDataProvider(BACKEND_BASE_URL.replace(/\/$/, ""), options);

export { dataProvider };