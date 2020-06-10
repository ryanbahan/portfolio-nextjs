import styled from 'styled-components'
import { GridItem } from '../../styles/components'

const BlogPostFigure = ({ title, img, link }) => {
  return (
    <a href={link} target="_blank">
      <GridItem>
        <Img src={img} />
        <H3>{ title }</H3>
      </GridItem>
    </a>
  )
}

const Img = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`

const H3 = styled.h3`
  margin: 1.5rem 0;
  fontWeight: 600;
`

export default BlogPostFigure
