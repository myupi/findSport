import Head from "next/head";
import Components from "src/components";

export default function GroundAdd() {
  const Sections = Components.section.createGround;
  return (
    <>
      <Head>
        <title>FindSport | Ground Add</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.CreateGround />
      </main>
    </>
  );
}
