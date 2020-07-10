import "antd/dist/antd.css";
import Head from "next/head";
import propTypes from "prop-types";
import React from "react";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Node bird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = { Component: propTypes.elementType.isRequired };

export default App;
