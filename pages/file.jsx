import { Component, Fragment } from "react";
import styles from "../styles/File.module.css";
import Link from "next/link";
import Head from "next/head";

class File extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Link to a dynamic routing page</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <h1 className={styles.container}>Hello World!</h1>
        <Link href="/dyn/people">
          <a className={styles.link}>Dynamic routing</a>
        </Link>
        <br />
        <br />
        <Link href="/">
          <a>Go to homepage</a>
        </Link>
      </Fragment>
    );
  }
}

export default File;
