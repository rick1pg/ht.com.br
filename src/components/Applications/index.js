import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from './styled'

const Applications = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
    query Applications {
        allMarkdownRemark(filter: {frontmatter: {id: {eq: "aplicacao"}}}) {
          edges {
            node {
              frontmatter {
                number
                title
                subtitle
                label
                url
                icon
              }
              html
            }
          }
        }
      }
  `)

  const [changeContent, setChangeContent] = useState(0)

  const [content, setcontent] = useState([])
  const [content2, setcontent2] = useState([])

  useEffect(() => {
    setcontent(allMarkdownRemark.edges[changeContent].node.frontmatter)
    setcontent2(allMarkdownRemark.edges[changeContent].node)
  }, [changeContent ])
  
    return(
        <S.Container >
                <S.InfoWrapper >
                    <h2>{content.number}</h2>
                    <h3>{content.title}</h3>
                    <h4>{content.subtitle}</h4>
                    <button>{content.label}</button>
                    <div dangerouslySetInnerHTML={{ __html: content2.html }}>
                    </div>
                </S.InfoWrapper>


                <S.IconWrapper>
                    <img src={`/assets/img/${content.icon}.svg`} alt="Ícone"/>
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