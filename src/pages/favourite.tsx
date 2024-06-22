import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Components from "src/components";

export default function Favourite() {
  const Sections = Components.section.myFavourite;
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/registration");
    }
  }, [router]);
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
