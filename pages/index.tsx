import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container, Table } from "components";

const columns = [
  { field: "rank", headerName: "Rank", width: 10 },
  { field: "name", headerName: "Company Name", width: 150 },
  { field: "website", headerName: "Website", width: 10 },
  { field: "founded", headerName: "Founded Date", width: 130 },
  { field: "industry", headerName: "Industry", width: 130 },
  {
    field: "totalFundingAmount",
    headerName: "Total Funding Amount (in USD)",
    width: 220,
  },
  { field: "lastFundingType", headerName: "Last Funding Type", width: 150 },
  { field: "numInvestors", headerName: "Number of Investors", width: 150 },
  { field: "companySize", headerName: "Company Size", width: 150 },
];

const rows = [
  {
    id: 1,
    rank: 1,
    name: "Carbon Health",
    // TODO: render external click icon
    website: "http://carbonhealth.com",
    founded: 2015,
    industry: "Medical Practice",
    // TODO: Number
    totalFundingAmount: 172500000,
    lastFundingType: "Series C",
    numInvestors: 17,
    companySize: "201-500 employees",
  },
];

const Home: NextPage = () => {
  // TODO: Fetch rows from the api
  return (
    <div>
      <Head>
        <title>Specter - Companies</title>
        <meta name="description" content="List of Companies from Specter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-10 py-10">
        <Container>
          <h1 className="text-2xl font-bold text-center mb-8 text-gray-700">
            Companies
          </h1>
          {/* TODO: onRowClick to display a modal */}
          <Table columns={columns} rows={rows} />
        </Container>
      </main>

      <footer>
        <Container className="flex items-center justify-center border-t border-gray-300 py-4">
          <span>Powered by </span>
          <span className="w-24 flex items-center justify-center ml-1">
            <Image
              src="/specter_dark.png"
              alt="Spectre Logo"
              width={509.55}
              height={124.95}
            />
          </span>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
