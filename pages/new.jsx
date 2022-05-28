import styles from "../styles/New.module.css";
import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  return {
    props: {
      users: data
    }
  }
}

export default function NewRoute({ users }) {
  return (
    <>
      <Head>
        <title>New</title>
      </Head>
      <div>
        {
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
              </div>
            );
          })
        }
      </div>
    </>
  );
}
