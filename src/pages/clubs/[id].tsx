import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Components from "src/components";

interface IClubs {
  id: string;
}

export const getServerSideProps: GetServerSideProps<IClubs> = async (
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

export default function Clubs({ id }: IClubs) {
  const Sections = Components.section.clubs;
  return (
    <>
      <Head>
        <title>FindSport | Clubs</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        <Sections.Club id={Number(id)} />
        <Sections.Rent />
      </main>
    </>
  );
}
