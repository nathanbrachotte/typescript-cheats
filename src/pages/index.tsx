import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import '../global.css'

const SectionTitle = styled.h2`
  margin-top: 50px;
`

interface Edge {
  node: {
    id: string
    frontmatter: {
      title: string
      layout: string
    }
    html: string
    headings: {
      value: string
    }
  }
}

interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[]
    }
  }
}

const IndexPage: React.FC<IndexProps> = ({ ...allProps }) => {
  const { edges } = allProps.data.allMarkdownRemark
  return (
    <IndexLayout>
      <Page>
        <Container>
          <p>
            This page displays all entries in this website, if you want to filter by technology use
            the menu on top.
          </p>
          {edges
            .filter(
              edge =>
                edge.node.frontmatter.title !== 'Example' && !!edge.node.html.includes('<details')
            )
            .map(edge => (
              <>
                <SectionTitle>{edge.node.frontmatter.title}</SectionTitle>
                <div
                  dangerouslySetInnerHTML={{
                    __html: edge.node.html
                  }}
                />
              </>
            ))}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            layout
          }
          html
          headings {
            value
          }
        }
      }
    }
  }
`
