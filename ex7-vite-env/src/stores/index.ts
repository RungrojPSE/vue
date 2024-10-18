//src/stores/index.ts
export const personalKey = import.meta.env.VITE_PERSONAL_API_KEY;
export const domainName = import.meta.env.VITE_DOMAIN_NAME;
export const baseAPI = import.meta.env.VITE_BASE_API;
console.log(import.meta.env);
console.log("baseAPI:", baseAPI);