import { generateHomePoints } from '../../generatePoints';
import { motion } from "framer-motion"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from 'styled-components';

class LandingPage extends React.Component {

  componentDidMount() {
    generateHomePoints()
  }

  render() {
    return (
      <>
        <LandingWrapper>
          <Landing>
            <a href="#work">
            <Div
              initial="hidden"
              animate="show"
              variants={downBtnVariants}
              whileHover="hover"
            >
              <KeyboardArrowDownIcon />
            </Div></a>
            <SocialIcons>
              <motion.a
                href="https://github.com/ryanbahan"
                target="_blank"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ delay: 3 }}
              >
                <li><GitHubIcon style={{ fill: '#333', fontSize: '1.75rem' }}/></li>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ryanbahan/"
                target="_blank"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ delay: 3.15 }}
              >
                <li><LinkedInIcon style={{ fill: '#2867B2', fontSize: '2rem' }} /></li>
              </motion.a>
              <motion.a
                href="mailto:ryan@ryanbahan.com"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ delay: 3.3 }}
              >
                <li><MailOutlineIcon style={{ fill: '#c0392b', fontSize: '2rem' }} /></li>
              </motion.a>
            </SocialIcons>
            <PartialBG
              initial={{x: -1000}}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 100, delay: 0.25 }}
            >
              <canvas id="home-points"></canvas>
            </PartialBG>
            <CenterWrapper>
              <Name
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 1}}
                transition={{ delay: 1, damping: 100 }}
              >
                ryan&nbsp;
                <Name
                  initial={{opacity: 0, y: -20}}
                  animate={{opacity: 1, y: 1}}
                  transition={{ delay: 1.3, damping: 100 }}
                >
                  bahan
                </Name>
              </Name>
              <Skills>
                <a href="#work"><motion.li
                  initial="hidden"
                  animate="show"
                  variants={developerVariants}
                  whileHover="hover"
                >
                  developer
                </motion.li></a>
                <a href="#blog-preview"><motion.li
                  initial="hidden"
                  animate="show"
                  variants={writerVariants}
                  whileHover="hover"
                >
                  writer
                </motion.li></a>
                <a href="#about"><motion.li
                  initial="hidden"
                  animate="show"
                  variants={creatorVariants}
                  whileHover="hover"
                >
                  creator
                </motion.li></a>
              </Skills>
            </CenterWrapper>
          </Landing>
        </LandingWrapper>
        <LandingPlaceholder />
      </>
    )
  }
}

const Landing = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100%;
`

const LandingPlaceholder = styled.div`
  height: 100vh;
  width: 100vw;
`

const LandingWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
`

const SocialIcons = styled.ul`
  position: absolute;
  top: 1rem;
  right: 2.5rem;
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0.25rem;

  li {
    font-size: 1.5rem;
    padding: 1rem;
    min-width: 2rem;
    text-align: center;
    cursor: pointer;
  }
`

const Skills = styled.ul`
  font-size: 2.9vw;
  font-weight: 300;
  margin: 2.5% 0;
  padding: 0 1.5%;
  list-style: none;
  display: flex;
  justify-content: space-between;
`

const PartialBG = styled(motion.div)`
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  min-height: 100vh;
  width: 47.3%;
`

const CenterWrapper = styled.div`
  z-index: 5;
`

const Name = styled(motion.span)`
  font-size: 10vw;
  font-weight: 100;
`

const Div = styled(motion.div)`
  position: absolute;
  color: #2c3e50;
  background: #ecf0f1;
  box-shadow: 0 0.5px 1px rgba(0,0,0,0.03),
                0 1px 2px rgba(0,0,0,0.03),
                0 2px 4px rgba(0,0,0,0.03),
                0 4px 8px rgba(0,0,0,0.03),
                0 8px 16px rgba(0,0,0,0.03),
                0 16px 32px rgba(0,0,0,0.03);
  bottom: 3.5rem;
  right: 3.5rem;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`

const developerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.75
    }
  },
  hover: {scale: 1.1}
}

const downBtnVariants = {
  hidden: { opacity: 0, scale: 0.75 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 3.5,
    }
  },
  hover: {scale: 1.1}
}

const writerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 2
    }
  },
  hover: {scale: 1.1}
}

const creatorVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 2.25
    }
  },
  hover: {scale: 1.1}
}

export default LandingPage
