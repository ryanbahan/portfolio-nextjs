import styled from 'styled-components'
import BenefitsIcon from './BenefitsIcon'
import { 
  SectionTitle, 
  SectionSubtitleLight, 
  FullWidthColumn,
  ItemGrid, 
  MediumSpacer,
} from '../../styles/components'

const About = () => {
  return (
    <FullWidthColumn>
      <a name="about"><SectionTitle>About</SectionTitle></a>
      <div style={{alignSelf: "center"}}>
        <SectionSubtitleLight>
          I'm a software engineer currently based in Denver, CO.
        </SectionSubtitleLight>
        <SectionSubtitleLight>
          I love creating performant, responsive, and modern web applications in React + Node.
        </SectionSubtitleLight>
        <SectionSubtitleLight>
          When I'm not coding, you'll find me producing music, writing about code, and creating generative art.
        </SectionSubtitleLight>
      </div>
      <MediumSpacer />
      <ItemGrid>
        <BenefitsIcon title="Responsive" description="Apps that work on everything." />
        <BenefitsIcon title="Accessible" description="Experiences that work for everyone." />
        <BenefitsIcon title="Performant" description="Forget about load times." />
        <BenefitsIcon title="Dynamic" description="Say hello to interactivity." />
      </ItemGrid>
      <MediumSpacer />
    </FullWidthColumn>
  )
}

const Wrapper = styled.div`
  max-width: 40rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  grid-gap: 5rem;
  border: solid 1px black;
`

export default About
