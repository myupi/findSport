import Head from "next/head";
import Components from "src/components";

export default function Grounds() {
  const Sections = Components.section.grounds;
  return (
    <>
      <Head>
        <title>FindSport | Grounds</title>
      </Head>
      <main>
        <Sections.Ground />
        <Sections.Similar />
      </main>
    </>
  );
}
