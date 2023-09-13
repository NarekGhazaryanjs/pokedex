import React, { FC } from "react";
import Head from "next/head";

interface Props {
  title: string;
  metaDescription: string;
}

const HelmetLayout: FC<Props> = ({ children, title, metaDescription }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Head>
    <main>{children}</main>
  </React.Fragment>
);

export default HelmetLayout;
