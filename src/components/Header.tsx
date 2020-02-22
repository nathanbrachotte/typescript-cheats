import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'
import SECTIONS from '../constants/sections'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const PageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 1em;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      <div>
        {SECTIONS.map(section => (
          <PageLink activeClassName="activeTab" to={section.path}>
            {section.label}
          </PageLink>
        ))}
      </div>
    </HeaderInner>
  </StyledHeader>
)

export default Header
