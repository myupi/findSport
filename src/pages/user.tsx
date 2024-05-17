import Head from "next/head";
import Components from "src/components";

export default function User() {
  const Sections = Components.section.user;
  return (
    <>
      <Head>
        <title>FindSport | User</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.UserHead />
        <Sections.UserPructs />
      </main>
    </>
  );
}
