import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CompaniesTable, Container } from "components";

const Home: NextPage = () => {
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
          <CompaniesTable />
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
