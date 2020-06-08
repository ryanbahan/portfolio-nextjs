import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
`

const BlogPostFigure = ({ title, img, link }) => {
  return (
    <a href={link} target="_blank"><Section>
      <img src={img} style={{width: "100%", height: "10rem", objectFit: "cover"}}/>
      <h3 style={{margin: "1.5rem 0", fontWeight: "600"}}>{ title }</h3>
    </Section></a>
  )
}

export default BlogPostFigure
