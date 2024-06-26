import Head from "next/head";
import Components from "src/components";

export default function AllAds() {
  const Sections = Components.section.products;
  
  return (
    <>
      <Head>
        <title>FindSport | All Adds</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.AllItems />
      </main>
    </>
  );
}
