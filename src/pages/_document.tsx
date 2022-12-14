import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return(
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" /> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
          <link href="/favicon.png" rel="shortcut icon" type="image/png" />      
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}