import Head from 'next/head'
import React from 'react'

function Css() {
  return (
    <>
     <Head>
     <meta name="deScription" content="Generated by create next app" />
        <meta name="robots" content="noindex, follow" />
        <meta name="deScription" content="" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
          <link rel="stylesheet" href="/fonts/remixicon.css" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon/favicon.ico"
          />
          <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/vendor/slick.css" />
          <link rel="stylesheet" href="/css/vendor/slick-theme.css" />
          <link rel="stylesheet" href="/css/style.css" />
     </Head>
    </>
  )
}

export default Css