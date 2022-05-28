import { Component } from "react";
import Link from "next/link";
import Head from "next/head";

export default class Timestamp extends Component {
  constructor() {
    super();
    this.state = {
      time: Date.now(),
    };
  }
  update() {
    this.setState({
      time: Date.now(),
    });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.update(), 1000000000000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <Head>
          <title>Current timestamp</title>
        </Head>
        <Link href="/">
          <a>Go to homepage</a>
        </Link>
        <h1>{this.state.time}</h1>
      </>
    );
  }
}
