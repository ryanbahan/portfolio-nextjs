import styled from 'styled-components'
import BenefitsIcon from './BenefitsIcon'
import SpeedIcon from '@material-ui/icons/Speed'
import DevicesOtherIcon from '@material-ui/icons/DevicesOther'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import WifiIcon from '@material-ui/icons/Wifi'
import WavesIcon from '@material-ui/icons/Waves'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 30rem;
  width: 60%;
  max-width: 45rem;
  padding: 0 2.5rem;
  margin: 0 auto;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  grid-gap: 5rem;
  margin-left: -1.5rem;
  margin-bottom: 7.5rem;
`

const About = () => {
  return (
    <Section>
      <a name="about"><h1 style={{fontSize: "2rem", textAlign: "center", paddingTop: "5rem", fontWeight: "600"}}>About</h1></a>
      <h2 style={{margin: "1.5rem 0", fontWeight: "500"}}>I'm a software engineer currently based in Denver, CO.</h2>
      <h3 style={{margin: "0.75rem 0", fontWeight: "500", lineHeight: "1.5", marginBottom: "7.5rem", }}>
        I love creating performant, responsive, and modern web applications in React + Node.<br /><br />
        When I'm not coding, you'll find me producing music, writing about code, and creating generative art.
      </h3>
      <Wrapper>
        <BenefitsIcon title="Responsive" description="Apps that work on everything." />
        <BenefitsIcon title="Accessible" description="Experiences that work for everyone." />
        <BenefitsIcon title="Performant" description="Forget about load times." />
        <BenefitsIcon title="Dynamic" description="Say hello to interactivity." />
      </Wrapper>
    </Section>
  )
}

export default About
