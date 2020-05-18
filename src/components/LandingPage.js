import { generateHomePoints } from '../main';

class LandingPage extends React.Component {

  componentDidMount() {
    generateHomePoints()
  }

  render() {
    return (
      <>
        <div class="landing-wrapper">
          <section class="landing">
            <ul class="social-icons">
              <a href="https://github.com/ryanbahan" target="_blank"><li>github</li></a>
              <a href="https://www.linkedin.com/in/ryanbahan/" target="_blank"><li>linkedin</li></a>
              <a href="mailto:ryan@ryanbahan.com"><li>email</li></a>
            </ul>
            <div class="partial-bg">
              <canvas id="home-points"></canvas>
            </div>
            <div class="center-wrapper">
              <p class="firstname">ryan <span class="lastname">bahan</span></p>
              <ul class="skills">
                <li class="skills-1 underline">developer</li>
                <li class="skills-2">writer</li>
                <li class="skills-3">creator</li>
              </ul>
            </div>
          </section>
        </div>
        <div class="landing-placeholder">
        </div>
      </>
    )
  }
}

export default LandingPage
