import styled from 'styled-components'
import BenefitsIcon from './BenefitsIcon'
import DevicesOtherIcon from '@material-ui/icons/DevicesOther'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import WifiIcon from '@material-ui/icons/Wifi'
import WavesIcon from '@material-ui/icons/Waves'

const getIcon = (title) => {
  switch (title) {
    case 'Responsive':
      return <DevicesOtherIcon style={{fontSize: "5rem", fill: "#e74c3c", marginBottom: "0.75rem"}} />
    case 'Accessible':
      return <AssignmentTurnedInIcon style={{fontSize: "5rem", fill: "#2ecc71", marginBottom: "0.75rem"}} />
    case 'Performant':
      return <WifiIcon style={{fontSize: "5rem", fill: "#3498db", marginBottom: "0.75rem"}} />
    case 'Dynamic':
      return <WavesIcon style={{fontSize: "5rem", fill: "#9b59b6", marginBottom: "0.75rem"}} />
  }
}

const About = ({ title, description }) => {
  return (
    <Section>
      { getIcon(title) }
      <p style={{fontWeight: "600"}}>{ title }</p>
      <p style={{textAlign: "center", margin: "1rem 0"}}>{ description }</p>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export default About
