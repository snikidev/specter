// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { LIMIT } from "consts";
import data from "../../data/companies.json";

const companiesString = JSON.stringify(data);
const companies = JSON.parse(companiesString);

type Data = {
  companies?: any;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(companies);
}
