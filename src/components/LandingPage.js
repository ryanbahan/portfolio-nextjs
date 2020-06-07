import { generateHomePoints } from '../generatePoints';
import { motion } from "framer-motion"
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
              <motion.a
                href="https://github.com/ryanbahan"
                target="_blank"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ delay: 3 }}
              >
                <li><GitHubIcon style={{ fill: '#F1502F', fontSize: '2rem' }}/></li>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ryanbahan/"
                target="_blank"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ delay: 3.15 }}
              >
                <li><LinkedInIcon style={{ fill: '#0072b1', fontSize: '2rem' }} /></li>
              </motion.a>
              <motion.a
                href="mailto:ryan@ryanbahan.com"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ delay: 3.3 }}
              >
                <li><MailOutlineIcon style={{ fill: '#24292e', fontSize: '2rem' }} /></li>
              </motion.a>
            </ul>
            <motion.div
              className="partial-bg"
              initial={{x: -1000}}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 100, delay: 0.25 }}
            >
              <canvas id="home-points"></canvas>
            </motion.div>
            <div className="center-wrapper">
              <motion.p
                className="firstname"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 1}}
                transition={{ delay: 1, damping: 100 }}
              >
                ryan&nbsp;
                <motion.span
                  initial={{opacity: 0, y: -20}}
                  animate={{opacity: 1, y: 1}}
                  transition={{ delay: 1.3, damping: 100 }}
                  className="lastname"
                >
                  bahan
                </motion.span>
              </motion.p>
              <ul className="skills">
                <a href="#work"><motion.li
                  className="skills-1 underline"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ delay: 1.75 }}
                >
                  developer
                </motion.li></a>
                <motion.li
                  className="skills-2"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ delay: 2 }}
                >
                  writer
                </motion.li>
                <motion.li
                  className="skills-3"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ delay: 2.25 }}
                >
                  creator
                </motion.li>
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
