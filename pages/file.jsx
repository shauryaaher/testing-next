import { Component, Fragment } from "react";
import styles from "../styles/File.module.css";
import Link from "next/link";

class File extends Component {
  render() {
    return (
      <Fragment>
        <h1 className={styles.container}>Hello World!</h1>
        <Link href="/dyn/people">
          <a className={styles.link}>Dynamic routing</a>
        </Link>
      </Fragment>
    );
  }
}

export default File;
