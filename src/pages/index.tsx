import type { NextPage } from 'next'
import ProductList from "../components/Products/ProductList";
import {Container} from "@material-ui/core";
import Layout from "../components/layouts/Layout";

const IndexPage: NextPage = () => {
  return (
      <Layout title="jNext nextjs">

        <Container maxWidth="lg">
            <ProductList />
        </Container>
      </Layout>
  )
}

export default IndexPage
