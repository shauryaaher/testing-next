import { Component } from "react";
import Head from "next/head";
import Link from "next/link";
export default class Route extends Component {
  constructor() {
    super();
    this.state = {
      data: new Date(),
    };
  }
  tick() {
    this.setState({
      data: new Date(),
    });
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
          <title>Current Time</title>
        </Head>
        <h1>{this.state.data.toLocaleString()}</h1>
        <Link href="/">
          <a>Go to homepage</a>
        </Link>
      </>
    );
  }
}
