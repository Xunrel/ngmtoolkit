import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const k = "😘 kilian 😍 mama 😘";
  return (
    <>
      <Head>
        <title>Some layout testing</title>
        <meta name="description" content="here will be some layout tests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen flex flex-col justify-center items-center p-4">
        <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
          <span className="text-red-400">{k.toUpperCase()}</span>
        </h2>
      </div>
    </>
  );
};

export default Home;
