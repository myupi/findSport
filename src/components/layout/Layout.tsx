import { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import { LayoutWrap } from "./layout.s";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Search } from "./search";
import { Breadcrumb } from "./breadcrumb";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutWrap path={router.asPath}>
      <Navbar />
      {router.asPath != "/user" && <Search />}
      {router.asPath != "/user" && router.asPath != "/" && <Breadcrumb />}
      {children}
      <Footer />
    </LayoutWrap>
  );
};
