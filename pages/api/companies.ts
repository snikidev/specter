// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { LIMIT } from "consts";
import companies from "../../data/companies.json";

type Data = {
  data?: any;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { page } = req.query;

  if (!page) res.status(400).json({ error: "Please, define a page" });
  else {
    if (parseInt(page) === 1)
      res.status(200).json({ data: companies.slice(0, LIMIT) });
    else
      res.status(200).json({
        data: companies.slice(
          parseInt(page) * LIMIT - LIMIT,
          parseInt(page) * LIMIT
        ),
      });
  }
}
