import { motion } from "framer-motion"

const Nav = () => {
  return (
    <motion.nav
      initial={{y: -500}}
      animate={{y: 1}}
      transition={{ damping: 50, delay: 2, duration: 1 }}
    >
      <ul>
        <a href="#work"><li>work</li></a>
      </ul>
    </motion.nav>
  )
}

export default Nav
