import styled from 'styled-components'
import BlogPostFigure from './BlogPostFigure'
import { 
  SectionTitle, 
  FullWidthColumn, 
  ItemGridWide 
} from '../../styles/components'

const BlogPreview = () => {
  return (
    <FullWidthColumn>
      <a name="blog-preview"><SectionTitle>Blog</SectionTitle></a>
        <ItemGridWide>
          <BlogPostFigure
            title={"The Budgeter's Guide to Starting a Podcast"}
            img={"/assets/podcast_blog_3.jpg"}
            link={"https://ryan-bahan-whtx.squarespace.com/blog/budgeters-guide-to-starting-a-podcast"}
          />
          <BlogPostFigure
            title={"Email Marketing in 2019: The foundations you should know"}
            img={"/assets/email_blog_3.jpg"}
            link={"https://ryan-bahan-whtx.squarespace.com/blog/2019/4/3/email-marketing-basics-what-you-should-know"}
          />
          <BlogPostFigure
            title={"Content Writing 101: The Technical Basics of Making a Great Post"}
            img={"/assets/content_writing_blog_3.jpg"}
            link={"https://ryan-bahan-whtx.squarespace.com/blog/2019/4/4/content-writing-101-the-basics-of-making-a-great-post"}
          />
        </ItemGridWide>
    </FullWidthColumn>
  )
}

export default BlogPreview
