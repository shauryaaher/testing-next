import Head from "next/head";
import { Fragment } from "react";

export default function Dyn() {
    return (
        <Fragment>
            <Head>
                <title>Dynamic routing</title>
            </Head>
            <h1>Dynamic routing.</h1>
        </Fragment>
    );
}