import { generateHomePoints } from '../generatePoints';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class LandingPage extends React.Component {

  componentDidMount() {
    generateHomePoints()
  }

  render() {
    return (
      <>
        <div className="landing-wrapper">
          <section className="landing">
            <ul className="social-icons">
              <a href="https://github.com/ryanbahan" target="_blank"><li><GitHubIcon style={{ fill: '#F1502F' }}/></li></a>
              <a href="https://www.linkedin.com/in/ryanbahan/" target="_blank"><li><LinkedInIcon style={{ fill: '#0072b1' }} /></li></a>
              <a href="mailto:ryan@ryanbahan.com"><li><MailOutlineIcon style={{ fill: '#24292e' }} /></li></a>
            </ul>
            <div className="partial-bg">
              <canvas id="home-points"></canvas>
            </div>
            <div className="center-wrapper">
              <p className="firstname">ryan <span className="lastname">bahan</span></p>
              <ul className="skills">
                <li className="skills-1 underline">developer</li>
                <li className="skills-2">writer</li>
                <li className="skills-3">creator</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="landing-placeholder">
        </div>
      </>
    )
  }
}

export default LandingPage
