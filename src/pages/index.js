import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Header from '../components/Header'

const IndexPage = () => (
  <Layout>
    <SEO
        title="Home"
        description="Dev Célere"
    />
    <Header />
  </Layout>
)

export default IndexPage