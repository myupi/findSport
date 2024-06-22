import Head from "next/head";
import Components from "src/components";

export default function SectionAdd() {
  const Sections = Components.section.sectionAdd;
  return (
    <>
      <Head>
        <title>FindSport | Section Add</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.CreateSection />
      </main>
    </>
  );
}
