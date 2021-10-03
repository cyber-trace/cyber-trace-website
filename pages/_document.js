import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* SEO */}
          <meta name="description" content="Cyber-Trace club portfolio" />
          <meta
            name="keywords"
            content="cyber security, club, issat, university"
          />
          <meta name="author" content="Cyber-Trace Dev Team" />

          {/* Icons */}
          <link rel="icon" href="/favicon.ico" />

          {/* Fonts (Preloading) */}
          <link
            rel="preload"
            href="/fonts/Nunito/Nunito-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Nunito/Nunito-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/OpenSans/OpenSans-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/OpenSans/OpenSans-Bold.ttf"
            as="font"
            crossOrigin=""
          />

          {/* Facebook OpenGraph */}
          {/* <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="" />
          <meta property="og:image" content="" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:alt" content="" />
          <meta property="og:description" content="" />
          <meta property="og:locale" content="en_US" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
