import Head from 'next/head'
import Link from 'next/link'
import BlogPreview from '../src/components/BlogPreview'
import LandingPage from '../src/components/LandingPage'
import FeaturedWork from '../src/components/FeaturedWork'
import About from '../src/components/About'

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
      <main>
        <LandingPage />
        <section className="scroll-content" style={{backgroundColor: "#fff"}}>
          <a name="work"><h1 className="title-label">Featured Work</h1></a>
          <section className="portfolio-item-wrapper">
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
          </section>
          <BlogPreview />
          <About />
        </section>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-family: 'Spartan', sans-serif;
          color: #2c3e50;
        }

        html,
        body {
          width: 100vw;
          height: 100%;
        }

        html {
          scroll-behavior: smooth;
        }

        nav a {
          text-decoration: none;
          font-weight: 600;
          color: #fff;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        nav {
          background: rgb(175,82,255);
          background: linear-gradient(351deg, rgba(175,82,255,1) 0%, rgba(0,212,255,1) 100%);
          color: #fff;
          position: fixed;
          top: 0;
          right: 0;
          min-width: 15vw;
          border-bottom-left-radius: 5rem;
          z-index: 2;
        }

        nav ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          display: flex;
          list-style: none;
          padding: 1.25rem;
          margin-left: 0.75rem;
        }

        nav li {
          text-align: center;
          min-width: 2.5rem;
          margin: 0.5rem 1rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }

        main {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        footer {
          background-color: grey;
          height: 20rem;
          position: relative;
          z-index: 5;
        }

        .landing-wrapper {
          position: fixed;
          top: 0;
          height: 100%;
        }

        .landing {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100vw;
          height: 100%;
        }

        .landing-placeholder {
          height: 100vh;
          width: 100vw;
        }

        #home-points {
          border: none;
        }

        .scroll-content {
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
        }

        .title-label {
          margin: 0 0 4.5rem 0;
          padding-top: 5rem;
        }

        .title-label-2 {
          margin: -2.5rem 0 0 0;
          text-align: center;
        }

        .lower-cta-tagline {
          margin-bottom: 2.5rem;
          max-width: 60vw;
        }

        .center-wrapper {
          z-index: 5;
        }

        .partial-bg {
          top: 0;
          left: 0;
          bottom: 0;
          position: absolute;
          min-height: 100vh;
          width: 47.3%;
        }

        .firstname,
        .lastname {
          font-size: 10vw;
          font-weight: 100;
        }

        .skills {
          font-size: 2.9vw;
          font-weight: 300;
          margin: 2.5% 0;
          padding: 0 1.5%;
          list-style: none;
          display: flex;
          justify-content: space-between;
        }

        .underline {
          padding-bottom: 1%;
          border-bottom: solid 0.5px rgba(0,0,0,0.85);
        }

        .social-icons {
          position: absolute;
          top: 1rem;
          right: 2.5rem;
          list-style: none;
          display: flex;
          align-items: center;
          margin: 0.25rem;
        }

        .social-icons li {
          font-size: 1.5rem;
          padding: 1rem;
          min-width: 2rem;
          text-align: center;
          cursor: pointer;
        }

        .portfolio-item-wrapper {
          max-width: 100vw;
          overflow: scroll;
          margin: 0 2.5rem;
        }
      `}</style>
    </div>
  )
}
