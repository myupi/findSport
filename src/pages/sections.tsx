import Head from "next/head";
import Components from "src/components";

export default function Sections() {
  const Sections = Components.section.sec;
  return (
    <>
      <Head>
        <title>FindSport | Sections</title>
      </Head>
      <main>
        <Sections.Section />
      </main>
    </>
  );
}
