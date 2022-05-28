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
        <Link href="/server-side">
          <a>Go to /server-side</a>
        </Link>
        <br />
        <Link href="/timestamp">
          <a>Go to /timestamp</a>
        </Link>
        <br />
        <Link href="/new">
          <a>Go to /new</a>
        </Link>
        <br />
        <Link href="/reactive">
          <a className={styles.link}>Go to /reactive</a>
        </Link>
        <br />
        <Link href="/route">
          <a className={styles.link}>Go to /route</a>
        </Link>
        <br />
        <Link href="/file">
          <a className={styles.link}>Go to /file</a>
        </Link>
        <br />
        <Link href="/dyn/">
          <a className={styles.link}>Go to /dyn</a>
        </Link>
        <br />
        <Link href="/middleware">
          <a className={styles.link}>Call Edge Function named middleware</a>
        </Link>
        <br />
        <Link href="/api/hello">
          <a className={styles.link}>Call Serverless Function named handler</a>
        </Link>
        <br />
        <Link href="/api/serverless">
          <a className={styles.link}>
            Call Serverless Function named serverless
          </a>
        </Link>
        <br />
      </div>
    </div>
  );
}
