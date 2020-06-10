import Head from 'next/head'
import Link from 'next/link'
import BlogPreview from '../src/components/BlogPreview'
import LandingPage from '../src/components/LandingPage'
import FeaturedWork from '../src/components/FeaturedWork'
import About from '../src/components/About'
import styled from 'styled-components'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset="utf-8" />
        <title>hey, i'm ryan.</title>
        <script src="/pts.min.js"></script>
        <script>history.scrollRestoration = "manual"</script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Spartan:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
      </Head>
      <Main>
        <LandingPage />
        <ScrollContent>
          <a name="work"><H1>Featured Work</H1></a>
          <PortfolioWrapper>
            <FeaturedWork
              title={"Easy Email"}
              subtitle={"React/Node, IBM Watson"}
              description={`Easy Email allows users of all skills levels to create beautiful, responsive emails
              with no code required. Even better - Easy Email leverages machine learning to
              analyze the emotional sentiment of your email content.`}
              img={"/assets/ssss.png"}
              repoLink={"https://github.com/ryanbahan/easy-email-2020"}
              deployLink={"https://ryanbahan.github.io/easy-email-2020/"}
            />
            <FeaturedWork
              title={"Learnable"}
              subtitle={"Next.js, Golang"}
              description={`The learning management platform for developers. Store content from all around
                the web, track progress, and close those pesky browser tabs.`}
              img={"/assets/ttt.png"}
              repoLink={"https://github.com/learn-able"}
              deployLink={"https://learnable-fe.now.sh/"}
            />
            <FeaturedWork
              title={"FitLit"}
              subtitle={"jQuery, Chart.js, Interact.js"}
              description={`A widget-based, drag-and-drop fitness tracking application meant
              to improve the health and well-being of its user community.`}
              img={"/assets/llll.png"}
              repoLink={"https://github.com/ryanbahan/fitlit-1911"}
              deployLink={"https://ryanbahan.github.io/fitlit-1911/src/index.html"}
            />
          </PortfolioWrapper>
          <BlogPreview />
          <About />
        </ScrollContent>
      </Main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-family: 'Spartan', sans-serif;
          color: #2c3e50;
          overscroll-behavior-y: none;
        }

        html,
        body {
          width: 100vw;
          height: 100%;
        }

        html {
          scroll-behavior: smooth;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .underline {
          padding-bottom: 1%;
          border-bottom: solid 0.5px rgba(0,0,0,0.85);
        }
      `}</style>
    </div>
  )
}

const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding-top: 5rem;
  margin-bottom: 5rem;
  font-weight: 600;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const ScrollContent = styled.section`
  box-shadow: 0px -2.5px 5px rgba(0,0,0,0.05);
  background-color: #fff;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 2.5%;
  width: 100vw;
  z-index: 3;
`

const PortfolioWrapper = styled.section`
  max-width: 100vw;
  overflow: scroll;
  margin: 0 2.5rem;
`
