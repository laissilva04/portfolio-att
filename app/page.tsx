import Inicial from "./components/Inicial"
import Projetos from "./components/Projetos"
import Experiencias from "./components/Experiencias"
import Carrossel from "./components/Carrossel"
import Contato from "./components/Contato"
import Formacao from "./components/Formacao"
import Sobre from "./components/Sobre"

export default function Home() {
  return (
    <>
      <Inicial />
      <Sobre/>
      <Carrossel />
      <Projetos />
      <Experiencias />
      <Formacao/>
      <Contato />
    </>
  )
}
