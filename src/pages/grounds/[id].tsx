import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Components from "src/components";

interface IGrounds {
  id: string;
}

export const getServerSideProps: GetServerSideProps<IGrounds> = async (
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

export default function Grounds({ id }: IGrounds) {
  const Sections = Components.section.grounds;
  return (
    <>
      <Head>
        <title>FindSport | Grounds</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.Ground id={Number(id)} />
        <Sections.Similar />
      </main>
    </>
  );
}
