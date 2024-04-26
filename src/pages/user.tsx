import Head from "next/head";
import Components from "src/components";

export default function User() {
  const Sections = Components.section.user;
  return (
    <>
      <Head>
        <title>FindSport | User</title>
      </Head>
      <main>
        <Sections.UserHead />
        <Sections.UserPructs />
      </main>
    </>
  );
}
