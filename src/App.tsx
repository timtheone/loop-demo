import About from './components/About/About'
import ContentCardWrapper from './components/ContentCards/ContentCardWrapper'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Wrapper from './components/Layout/Wrapper'
import Navigation from './components/Navigation/Navigation'
import Team from './components/Team/Team'

function App() {
  return (
    <Wrapper>
      <Navigation />
      <Hero />
      <ContentCardWrapper />
      <About />
      <Team />
      <Footer />
    </Wrapper>
  )
}

export default App
