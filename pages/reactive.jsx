import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

function Reactive() {
  const [reader, writer] = useState(0);
  return (
    <>
      <Head>
        <title>Counter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h2>{reader}</h2>
      <button
        onClick={() => {
          writer(reader + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          writer(reader - 1);
        }}
      >
        Decrement
      </button><br />
      <Link href="/">
        <a>Go to homepage</a>
      </Link>
    </>
  );
}

export default Reactive;
