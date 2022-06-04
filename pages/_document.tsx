import Document, { Head, Main, NextScript, DocumentContext } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render () {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}