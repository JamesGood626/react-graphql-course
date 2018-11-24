import App, { Container } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

class MyApp extends App {
  // This sets up Next.js to fetch all query and mutation data
  // that need to be retrieved before rendering the page.
  // It'll check all pages for the queries and mutations they fire off
  // and the results of those will be available on pageProps which
  // we then spread on the Component for that specific page which
  // issued the queries and mutations.
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //  this exposes the query to the user
    // NOTE: this is for query string params in the URL
    // not a graphql query.
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
