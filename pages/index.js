import Head from 'next/head'
import Link from 'next/link'
import Nav from '../src/components/Nav'
import LandingPage from '../src/components/LandingPage'

export default function Home() {
  return (
    <div className="container" data-barba="wrapper">
      <Head>
        <meta charset="utf-8" />
        <title>hey, i'm ryan.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Spartan:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/@barba/core"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pts/0.9.1/pts.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
      </Head>
      <Nav />
      <main data-barba="container" data-barba-namespace="home">
      <LandingPage />
        <section class="work">
          <a name="work"><h2 class="title-label">Featured Work</h2></a>
          <section class="portfolio-item-wrapper">
            <article class="portfolio-card" data-portfolio-item="whats-new">
              <img src="/assets/whats-new-device-mock-1x.png" alt="" class="device-mock" />
              <div class="portfolio-card-info">
                <h3>What's New?</h3>
                <h4>React, MapQuest API, News API</h4>
                <p class="portfolio-description">
                  A simple & efficient news application built in React.
                  Leverages the Free News API & MapQuest reverse-geocoding
                  API to serve up relevant stories.
                </p>
                <div class="portfolio-button-container">
                  <a href="https://ryanbahan.github.io/whats-new/" target="_blank"><button type="button" name="button">View App</button></a>
                  <a href="https://github.com/ryanbahan/whats-new" target="_blank"><button type="button" name="button">View Code</button></a>
                </div>
              </div>
            </article>
            <article class="portfolio-card" data-portfolio-item="trip-advicer">
              <img src="/assets/fitlit-device-mock-1x.png" alt="" class="device-mock" />
              <div class="portfolio-card-info">
                <h3>FitLit</h3>
                <h4>jQuery, Chart.js, Interact.js</h4>
                <p class="portfolio-description">
                  A widget-based, drag-and-drop fitness tracking application meant
                  to improve the health and well-being of its user community.
                </p>
                <div class="portfolio-button-container">
                  <a href="https://ryanbahan.github.io/fitlit-1911/src/index.html" target="_blank"><button type="button" name="button">View App</button></a>
                  <a href="https://github.com/ryanbahan/fitlit-1911" target="_blank"><button type="button" name="button">View Code</button></a>
                </div>
              </div>
            </article>
            <article class="portfolio-card" data-portfolio-item="fitlit">
              <img src="/assets/trip-advicer-device-mock-1x.png" alt="" class="device-mock" />
              <div class="portfolio-card-info">
                <h3>Trip Advicer</h3>
                <h4>jQuery, Chart.js, Moment.js</h4>
                <p class="portfolio-description">
                  A travel-booking application with exceptional consideration to UI/UX, compelling form layouts,
                  and OOP-adherent application architecture.
                </p>
                <div class="portfolio-button-container">
                  <a href="https://ryanbahan.github.io/trip-advicer-v1/" target="_blank"><button type="button" name="button">View App</button></a>
                  <a href="https://github.com/ryanbahan/trip-advicer-v1" target="_blank"><button type="button" name="button">View Code</button></a>
                </div>
              </div>
            </article>
          </section>
        </section>
      </main>

      <footer>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-family: 'Spartan', sans-serif;
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
        }

        .landing {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100vw;
          height: 100vh;
        }

        .landing-placeholder {
          height: 100vh;
          width: 100vw;
        }

        .work {
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

        .about {
          border: solid 1px black;
          width: 100%;
          height: 100vh;
        }

        .title-label {
          margin: 4.5rem 0;
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
          pointer-events: none;
          z-index: 5;
        }

        .partial-bg {
          top: 0;
          left: 0;
          bottom: 0;
          position: absolute;
          background-color: #e3e3e3;
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
          bottom: 0;
          right: 0;
          list-style: none;
          display: flex;
          margin: 0.25rem;
        }

        .social-icons li {
          font-size: 1.5rem;
          padding: 1rem;
          min-width: 2rem;
          text-align: center;
          cursor: pointer;
        }

        .fa-github {
          color: #F1502F;
        }

        .fa-linkedin-in {
          color: #2867B2;
        }

        .fa-envelope-square {
          color: rgba(0,0,0,0.65)
        }

        .portfolio-item-wrapper {
          max-width: 100vw;
          overflow: scroll;
          margin: 0 2.5rem;
        }

        .portfolio-card {
          display: flex;
          flex-wrap: wrap;
          margin: 0 0 2.5rem 0;
          max-width: 100vw;
        }

        .portfolio-card-info {
          padding: 0 2.5rem 1.5rem 0;
          width: 27.5rem;
          flex-grow: 1;
          margin-left: 2.5rem;
        }

        .portfolio-card-info > * {
          padding: 0.75rem 0;
        }

        .portfolio-card-info button {
          padding: 1rem;
          font-size: 0.85rem;
          border-radius: 0.25rem;
          cursor: pointer;
        }

        .device-mock {
          min-width: 20rem;
          width: 30rem;
          max-width: 100%;
          flex-grow: 1;
          height: 100%;
          margin-left: 2.5rem;
          margin-right: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .portfolio-description {
          line-height: 1.5;
        }
      `}</style>
    </div>
  )
}
