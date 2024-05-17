import Head from "next/head";
import Components from "src/components";

export default function Favourite() {
  const Sections = Components.section.myFavourite;
  return (
    <>
      <Head>
        <title>FindSport | Favourite</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.MyFavourite />
      </main>
    </>
  );
}
