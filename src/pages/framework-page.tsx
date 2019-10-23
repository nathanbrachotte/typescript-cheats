import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { colors } from '../styles/variables'

const Purple = styled.span`
  color: ${colors.lilac};
`

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Menu</h1>
        <p>
          Please note that if an type is used in React-Native but also in <Purple>React</Purple>,
          you'll most likely find your answer in the React Section
        </p>
        <ul>
          <li>
            <Link to="/react/">React</Link>
            <ul>
              <li>
                <Link to="/react-functional-components/">Functional Components</Link>
              </li>
              <li>
                <Link to="/react-hooks/">Hooks</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/react-native/">React-Native</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTwo
