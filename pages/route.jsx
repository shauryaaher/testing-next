import { Component } from "react";
import Head from "next/head";
import Link from "next/link";
export default class Route extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }
  tick() {
    this.setState((state) => ({
      data: state.data + 1,
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <Head>
          <title>Seconds</title>
        </Head>
        <h1>{this.state.data}</h1>
        <Link href="/">
          <a>Go to homepage</a>
        </Link>
      </>
    );
  }
}
