import styled from 'styled-components'
import FeaturedWorkItem from './FeaturedWorkItem'

const FeaturedWork = () => {
    return (
        <FeaturedWorkWrapper>
            <a name="work"><H1>Featured Work</H1></a>
            <FeaturedWorkItem
                title={"Easy Email"}
                subtitle={"React/Node, IBM Watson"}
                description={`Easy Email allows users of all skills levels to create beautiful, responsive emails
              with no code required. Even better - Easy Email leverages machine learning to
              analyze the emotional sentiment of your email content.`}
                img={"/assets/ssss.png"}
                repoLink={"https://github.com/ryanbahan/easy-email-2020"}
                deployLink={"https://ryanbahan.github.io/easy-email-2020/"}
            />
            <FeaturedWorkItem
                title={"Learnable"}
                subtitle={"Next.js, Golang"}
                description={`The learning management platform for developers. Store content from all around
                the web, track progress, and close those pesky browser tabs.`}
                img={"/assets/ttt.png"}
                repoLink={"https://github.com/learn-able"}
                deployLink={"https://learnable-fe.now.sh/"}
            />
            <FeaturedWorkItem
                title={"FitLit"}
                subtitle={"jQuery, Chart.js, Interact.js"}
                description={`A widget-based, drag-and-drop fitness tracking application meant
              to improve the health and well-being of its user community.`}
                img={"/assets/llll.png"}
                repoLink={"https://github.com/ryanbahan/fitlit-1911"}
                deployLink={"https://ryanbahan.github.io/fitlit-1911/src/index.html"}
            />
        </FeaturedWorkWrapper> 
    )
}

const FeaturedWorkWrapper = styled.section`
  max-width: 100vw;
  overflow: scroll;
  margin: 0 2.5rem;
`

const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding-top: 5rem;
  margin-bottom: 5rem;
  font-weight: 600;
`

export default FeaturedWork