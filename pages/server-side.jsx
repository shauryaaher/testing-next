import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch("https://testing-next-silk.vercel.app/api/serverSide/");
  const data = await res.json();
  return {
    props: {
      values: data,
    },
  };
}

export default function ServerSide({ values }) {
  return (
    <>
      <Head>
        <title>Get data from server</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="/">
        <a>Go to homepage</a>
      </Link>
      <div>
        {values.map((val) => {
          <ol key={val.id}>
            <li>{val}</li>
          </ol>;
        })}
      </div>
    </>
  );
}
