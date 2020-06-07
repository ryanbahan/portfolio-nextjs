import styled from 'styled-components'
import BlogPostFigure from './BlogPostFigure'

const Section = styled.section`
  width: 100%;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const BlogPreview = () => {
  return (
    <Section>
      <a name="blog-preview">
        <h1 style={{fontSize: "2rem", textAlign: "center", paddingTop: "5rem", paddingBottom: "1rem", fontWeight: "600"}}>
          Blog
        </h1>
        <Wrapper>
          <BlogPostFigure
            title={"The Budgeter's Guide to Starting a Podcast"}
            img={"/assets/william-iven-TMOeGZw9NY4-unsplash.jpg"}
            link={"https://ryan-bahan-whtx.squarespace.com/blog/budgeters-guide-to-starting-a-podcast"}
          />
          <BlogPostFigure
            title={"Email Marketing in 2019: The foundations you should know"}
            img={"/assets/kevin-bhagat-0CDP_vQhD-Y-unsplash.jpg"}
            link={"https://ryan-bahan-whtx.squarespace.com/blog/2019/4/3/email-marketing-basics-what-you-should-know"}
          />
          <BlogPostFigure
            title={"Content Writing 101: The Technical Basics of Making a Great Post"}
            img={"/assets/feliphe-schiarolli-hes6nUC1MVc-unsplash.jpg"}
            link={"https://ryan-bahan-whtx.squarespace.com/blog/2019/4/4/content-writing-101-the-basics-of-making-a-great-post"}
          />
        </Wrapper>
      </a>
    </Section>
  )
}

export default BlogPreview
