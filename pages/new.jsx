import styles from "../styles/New.module.css";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
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
            <ul key={user.id}>
              <li>{user.name}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
