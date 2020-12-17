import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from './styled'

const Applications = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
    query Applications {
      allMarkdownRemark(filter: {
        frontmatter: {api_id: {eq: "aplicacao"}}, fields: {}}, 
        sort: {order: ASC, fields: frontmatter___api_number}) {
        edges {
          node {
            frontmatter {
              api_number
              api_title
              api_subtitle
              api_label
              api_url
              api_icon
            }
            html
          }
        }
      }
    }
  `)

  const [changeContent, setChangeContent] = useState(0)

  const [content, setcontent] = useState(0)
  const [content2, setcontent2] = useState(0)

  useEffect(() => {
    setcontent2(allMarkdownRemark.edges[changeContent].node)
    setcontent(allMarkdownRemark.edges[changeContent].node.frontmatter)
  }, [changeContent, allMarkdownRemark.edges])
  
    return(
        <S.Container >
                <S.InfoWrapper >
                    <h2>{content.api_number}</h2>
                    <h3>{content.api_title}</h3>
                    <h4>{content.api_subtitle}</h4>
                    <button>{content.api_label}</button>
                    <div dangerouslySetInnerHTML={{ __html: content2.html }}>
                    </div>
                </S.InfoWrapper>


                <S.IconWrapper>
                    <img src={`/assets/img/${content.api_icon}.svg`} alt="Ícone"/>
                </S.IconWrapper>


                <S.NumberWrapper>
                    <button onClick={() => setChangeContent(0)}><h6>01</h6></button>
                    <button onClick={() => setChangeContent(1)}><h6>02</h6></button>
                    <button onClick={() => setChangeContent(2)}><h6>03</h6></button>
                    <button onClick={() => setChangeContent(3)}><h6>04</h6></button>
                </S.NumberWrapper>

        </S.Container>
    )
}

export default Applications