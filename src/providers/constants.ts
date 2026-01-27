export const API_URL = "https://api.fake-rest.refine.dev";

// Backend base URL used by the data provider. Prefer the Vite env var, fallback to localhost.
export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL ?? "http://localhost:8000/api/";
