import Head from "next/head";
import { useState } from "react";
import Components from "src/components";

export default function Registration() {
  const Sections = Components.section.registration;
  const [state, setState] = useState<boolean>(true);
  return (
    <>
      <Head>
        <title>FindSport | Registration</title>
        <link rel="icon" type="image/x-icon" href="/images/Icon.png"></link>
      </Head>
      <main>
        {
          state ? <Sections.SignInForm setState={setState}/> : <Sections.RegisterForm setState={setState}/>
        }
      </main>
    </>
  );
}
