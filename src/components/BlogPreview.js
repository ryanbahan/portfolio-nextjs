import styled from 'styled-components'
import BlogPostFigure from './BlogPostFigure'

const Section = styled.section`
  width: 100%;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 70vw;
  margin-top: 2.5rem;
`

const BlogPreview = () => {
  return (
    <Section>
      <a name="blog-preview">
        <h1 style={{fontSize: "2rem", textAlign: "center", paddingTop: "5rem", fontWeight: "600"}}>
          Blog
        </h1>
        <Wrapper>
          <BlogPostFigure
            title={"The Budgeter's Guide to Starting a Podcast"}
            img={"/assets/blog1.jpg"}
            link={"https://ryan-bahan-whtx.squarespace.com/blog/budgeters-guide-to-starting-a-podcast"}
          />
          <BlogPostFigure
            title={"Email Marketing in 2019: The foundations you should know"}
            img={"/assets/blog2.jpg"}
            link={"https://ryan-bahan-whtx.squarespace.com/blog/2019/4/3/email-marketing-basics-what-you-should-know"}
          />
          <BlogPostFigure
            title={"Content Writing 101: The Technical Basics of Making a Great Post"}
            img={"/assets/blog3.jpg"}
            link={"https://ryan-bahan-whtx.squarespace.com/blog/2019/4/4/content-writing-101-the-basics-of-making-a-great-post"}
          />
        </Wrapper>
      </a>
    </Section>
  )
}

export default BlogPreview
