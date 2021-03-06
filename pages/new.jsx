import styles from "../styles/New.module.css";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://testing-next-silk.vercel.app/api/new/");
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
        {users.map((user) => {
          return (
            <ul key={user.id}>
              <li>{user.data}</li>
            </ul>
          );
        })}
        <Link href="/">
          <a>Go to homepage</a>
        </Link>
      </div>
    </>
  );
}
