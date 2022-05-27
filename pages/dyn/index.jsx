import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

export default function Dyn() {
  return (
    <Fragment>
      <Head>
        <title>Dynamic routing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>Dynamic routing.</h1>
      <Link href="/">
        <a>Go to homepage</a>
      </Link>
    </Fragment>
  );
}
