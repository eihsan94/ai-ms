import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../styles/theme'


export default class Document extends NextDocument {
    render() {
        return (
          <Html lang="en">
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"></link>
              <link rel="preconnect" href="https://fonts.gstatic.com"></link>
              <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;800;900&display=swap"
                rel="stylesheet"
              ></link>
            </Head>
            <body>
              {/* 👇 Here's the script */}
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              <Main />
              <NextScript />
            </body>
          </Html>
        );
    }
}