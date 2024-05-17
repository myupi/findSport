import Head from "next/head";
import Components from "src/components";

export default function Home() {
  const Sections = Components.section.home;
  return (
    <>
      <Head>
        <title>FindSport</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.Offer />
        <Sections.MostPopular />
        <Sections.Issues />
        <Sections.Client />
        <Sections.Partners />
        <Sections.FAQ />
      </main>
    </>
  );
}
