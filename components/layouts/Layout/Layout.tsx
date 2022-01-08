import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import React from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({
  children,
  title = "Book Best Hotels for your Holiday",
}: Props) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
