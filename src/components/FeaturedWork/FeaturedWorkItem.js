import styled from 'styled-components'
import { SectionSubtitle } from '../../styles/components'

const FeaturedWorkItem = ({
  title,
  img,
  subtitle,
  description,
  repoLink,
  deployLink }) => {
  return (
    <Card>
      <Img src={ img } alt=""/>
      <CardInfo>
        <SectionSubtitle>{ title }</SectionSubtitle>
        <h4 style={{fontWeight: "500", fontStyle: "italic"}}>{ subtitle }</h4>
        <PortfolioDescription>
          { description }
        </PortfolioDescription>
        <ButtonContainer>
          <a href={ deployLink } target="_blank">
            <Button type="button" name="button">View App</Button>
          </a>
          <a href={ repoLink } target="_blank">
            <Button type="button" name="button">View Code</Button>
          </a>
        </ButtonContainer>
      </CardInfo>
    </Card>
  )
}

const Img = styled.img`
  min-width: 20rem;
  width: 30rem;
  max-width: 100%;
  flex-grow: 1;
  height: 100%;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 0.5px 1px rgba(0,0,0,0.03),
                0 1px 2px rgba(0,0,0,0.03),
                0 2px 4px rgba(0,0,0,0.03),
                0 4px 8px rgba(0,0,0,0.03),
                0 8px 16px rgba(0,0,0,0.03),
                0 16px 32px rgba(0,0,0,0.03);

  @media (max-width: 600px) {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`

const Button = styled.button`
  padding: 1rem;
  font-size: 0.85rem;
  border-radius: 0.25rem;
  border: none;
  background: #e4e4e4;
  margin: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0.5px 1px rgba(0,0,0,0.03),
                0 1px 2px rgba(0,0,0,0.03),
                0 2px 4px rgba(0,0,0,0.03),
                0 4px 8px rgba(0,0,0,0.03),
                0 8px 16px rgba(0,0,0,0.03),
                0 16px 32px rgba(0,0,0,0.03);
`

const PortfolioDescription = styled.p`
  line-height: 1.75;
`

const ButtonContainer = styled.div`
  margin-left: -0.55rem;
`

const CardInfo = styled.div`
  padding: 0 2.5rem 1.5rem 0;
  width: 27.5rem;
  flex-grow: 1;
  margin-left: 2.5rem;

  > * {
    padding: 0.75rem 0;
  }
`

const Card = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 2.5rem 0;
  max-width: 100vw;
`

export default FeaturedWorkItem
