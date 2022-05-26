import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Homepage: welcome to testing-next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.body}>
        <Link href="/reactive">
          <a>Go to /reactive</a>
        </Link>
        <br />
        <Link href="/route">
          <a>Go to /route</a>
        </Link>
        <br />
        <Link href="/file">
          <a>Go to /file</a>
        </Link>
        <br />
        <Link href="/dyn/">
          <a>Go to /dyn</a>
        </Link>
        <br />
        <Link href="/middleware">
          <a>Call Edge Function "middleware"</a>
        </Link>
        <br />
        <Link href="/api/hello">
          <a>Call Serverless Function "handler"</a>
        </Link>
        <br />
        <Link href="/api/serverless">
          <a>Call Serverless Function "serverless"</a>
        </Link>
        <br />
      </div>
    </div>
  );
}
