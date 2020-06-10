import styled from 'styled-components'

const BlogPostFigure = ({ title, img, link }) => {
  return (
    <a href={link} target="_blank"><Section>
      <Img src={img} />
      <H3>{ title }</H3>
    </Section></a>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  z-index: 10;
  background-color: #fff;
`

const Img = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;}
`

const H3 = styled.h3`
  margin: 1.5rem 0;
  fontWeight: 600;
`

export default BlogPostFigure
