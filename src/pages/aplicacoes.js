import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Applications from "../components/Applications"


const AplicacoesPage = () => (
  <Layout>
    <SEO
        title="Aplicações"
        description="Henrique Teixeira"
    />
    <Applications />
  </Layout>
)

export default AplicacoesPage