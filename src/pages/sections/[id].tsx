import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Components from "src/components";

interface ISections {
  id: string;
}

export const getServerSideProps: GetServerSideProps<ISections> = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const { id } = query;

  return {
    props: {
      id: typeof id === "string" ? id : "",
    },
  };
};

export default function Sections({ id }: ISections) {
  const Sections = Components.section.sec;
  return (
    <>
      <Head>
        <title>FindSport | Sections</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.Section id={Number(id)} />
      </main>
    </>
  );
}
