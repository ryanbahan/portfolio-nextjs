import Head from 'next/head'
import Link from 'next/link'
import BlogPreview from '../src/components/Blog/BlogPreview'
import LandingPage from '../src/components/LandingPage/LandingPage'
import FeaturedWork from '../src/components/FeaturedWork/FeaturedWork'
import About from '../src/components/About/About'
import styled from 'styled-components'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>hey, i'm ryan.</title>
      </Head>
      <Main>
        <LandingPage />
        <ScrollContent>
          <FeaturedWork />
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
          width: 100%;
          height: 100%;
        }

        html {
          scroll-behavior: smooth;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </div>
  )
}

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
