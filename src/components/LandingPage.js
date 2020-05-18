import { generateHomePoints } from '../generatePoints';

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
              <a href="https://github.com/ryanbahan" target="_blank"><li><i className="fab fa-github"></i></li></a>
              <a href="https://www.linkedin.com/in/ryanbahan/" target="_blank"><li><i className="fab fa-linkedin-in"></i></li></a>
              <a href="mailto:ryan@ryanbahan.com"><li><i className="fas fa-envelope-square"></i></li></a>
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
