import styled from 'styled-components'

export const SectionTitle = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    margin: 2.5rem 0;
`

export const SectionSubtitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5;
    max-width: 37.5rem;
`

export const SectionSubtitleLight = styled.h2`
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 1rem;
    max-width: 37.5rem;

    @media (max-width: 600px) {
      padding: 0 2.5rem;
    }
`

export const FullWidthColumn = styled.section`
    width: 100vw;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 5rem;

    @media (max-width: 600px) {
      padding: 1rem 0;
    }
`

export const ItemGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
  grid-gap: 2.5rem;
  align-self: center;
  width: 100%;
  max-width: 40rem;
`

export const ItemGridWide = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
  grid-gap: 2.5rem;
  align-self: center;
  width: 100%;
  max-width: 60rem;

  @media (max-width: 600px) {
    padding: 0 2.5rem;
  }
`

export const GridItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const MediumSpacer = styled.span`
    height: 5rem;
`