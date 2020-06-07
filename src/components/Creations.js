import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Creations = () => {
  return (
    <Section>
      <a name="creations">
        <h1 style={{fontSize: "2rem", textAlign: "center", paddingTop: "5rem", fontWeight: "600"}}>
          Creations
        </h1>
      </a>
    </Section>
  )
}

export default Creations
