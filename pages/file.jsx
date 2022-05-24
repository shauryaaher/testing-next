import { Component, Fragment } from "react";
import styles from "../styles/File.module.css";

class File extends Component {
  render() {
    return (
      <Fragment>
        <h1 className={styles.container}>Hello World!</h1>
        <a className={styles.link} href="/dyn/people/">
          Dynamic routing
        </a>
      </Fragment>
    );
  }
}

export default File;
