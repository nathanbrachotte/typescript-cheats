import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import '../global.css'
import { colors } from '../styles/variables'

const BoldedBlue = styled.span`
  color: ${colors.brand};
  font-weight: bold;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Welcome</h1>
        <p>
          Please note that if an type is used in <BoldedBlue>React-Native</BoldedBlue> but also in{' '}
          <BoldedBlue>React</BoldedBlue>, you'll most likely find your answer in the{' '}
          <BoldedBlue>React</BoldedBlue> Section
        </p>
        <ul>
          <li>
            <Link to="/javascript/">JavaScript</Link>
          </li>
          <li>
            <Link to="/react/">React</Link>
            {/* <ul>
              <li>
                <Link to="/react-functional-components/">Functional Components</Link>
              </li>
              <li>
                <Link to="/react-hooks/">Hooks</Link>
              </li>
            </ul> */}
          </li>
          <li>
            <Link to="/react-native/">React-Native</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
