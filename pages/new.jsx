import styles from "../styles/New.module.css";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://testing-next-silk.vercel.app/api/hello");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
}

export default function NewRoute({ users }) {
  return (
    <>
      <Head>
        <title>New</title>
      </Head>
      <div className={styles.main}>
        <Link href="/">
          <a>Go to homepage</a>
        </Link>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.howdy}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
