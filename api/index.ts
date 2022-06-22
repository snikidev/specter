import ky from "ky";

export const fetchCompanies = async () =>
  await ky.get("/api/companies", {}).json();
