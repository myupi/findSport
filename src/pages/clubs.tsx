import Head from "next/head";
import Components from "src/components";

export default function Clubs() {
  const Sections = Components.section.clubs;
  return (
    <>
      <Head>
        <title>FindSport | Clubs</title>
      </Head>
      <main>
        <Sections.Club />
        <Sections.Rent />
      </main>
    </>
  );
}
