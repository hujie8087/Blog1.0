import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Head>
        <title>My blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>
  );
}

export default MyApp;
