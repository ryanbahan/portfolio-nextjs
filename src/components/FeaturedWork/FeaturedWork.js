import styled from 'styled-components'
import FeaturedWorkItem from './FeaturedWorkItem'
import { SectionTitle, FullWidthColumn } from '../../styles/components'

const FeaturedWork = () => {
    return (
        <FullWidthColumn>
            <a name="work"><SectionTitle>Featured Work</SectionTitle></a>
            <FeaturedWorkItem
                title={"Easy Email"}
                subtitle={"React/Node, IBM Watson"}
                description={`Easy Email allows users of all skills levels to create beautiful, responsive emails
              with no code required. Even better - Easy Email leverages machine learning to
              analyze the emotional sentiment of your email content.`}
                img={"/assets/easy_email_screen.png"}
                repoLink={"https://github.com/ryanbahan/easy-email"}
                deployLink={"https://easyemail.app"}
            />
            <FeaturedWorkItem
                title={"Learnable"}
                subtitle={"Next.js, Node, PostgreSQL, AWS"}
                description={`The learning management platform for developers. Store content from all around
                the web, track progress, and close those pesky browser tabs.`}
                img={"/assets/learnable_screen.png"}
                repoLink={"https://github.com/ryanbahan/learnable"}
                deployLink={"https://learnableapp.dev/"}
            />
            <FeaturedWorkItem
                title={"FitLit"}
                subtitle={"jQuery, Chart.js, Interact.js"}
                description={`A widget-based, drag-and-drop fitness tracking application meant
              to improve the health and well-being of its user community.`}
                img={"/assets/fitlit_screen.png"}
                repoLink={"https://github.com/ryanbahan/fitlit-1911"}
                deployLink={"https://ryanbahan.github.io/fitlit-1911/src/index.html"}
            />
        </FullWidthColumn> 
    )
}

export default FeaturedWork