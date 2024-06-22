import Head from "next/head";
import Components from "src/components";

export default function ClubAdd() {
  const Sections = Components.section.craeteClub;
  return (
    <>
      <Head>
        <title>FindSport | Club Add</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.CreateClub />
      </main>
    </>
  );
}
