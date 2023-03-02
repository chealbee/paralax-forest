import BottomSection from "@/components/BottomSection";
import TopSection from "@/components/TopSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>paralax page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopSection />
        <BottomSection />
      </main>
    </>
  );
}
