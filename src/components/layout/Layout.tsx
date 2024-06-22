import { FC, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { LayoutWrap } from "./layout.s";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Search } from "./search";
import { Breadcrumb } from "./breadcrumb";

interface ILayoutProps {
  children: ReactNode;
}

const routSearch: string[] = [
  "/ground-add",
  "/section-add",
  "/club-add",
  "/user",
  "/registration",
  "/edit-profile",
];
const routBreadCrumb: string[] = [
  "/ground-add",
  "/section-add",
  "/club-add",
  "/user",
  "/registration",
  "/",
  "/edit-profile",
];

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <LayoutWrap path={router.asPath}>
      <Navbar />
      {!routSearch.includes(router.asPath) && <Search />}
      {!routBreadCrumb.includes(router.asPath) && <Breadcrumb />}
      {children}
      <Footer />
    </LayoutWrap>
  );
};
