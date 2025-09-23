import Hero from "./components/Hero"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Carrossel from "./components/Carrossel"
import ContactForm from "./components/ContactForm"
import Formacao from "./components/Formacao"
import Header from "./components/Header.jsx"

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <Timeline />
      <PortfolioGrid />
      <Carrossel />
      <Formacao/>
      <ContactForm />
    </>
  )
}
