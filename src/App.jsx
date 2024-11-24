import Content_Store from "./store/Content_Store"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Cards from "./components/Cards"

const App = () => {

  return (
    <Content_Store>
        <section>
           <Nav />
        </section>
        <section>
          <Hero />
        </section>
        <section className="py-10">
           <Cards />
        </section>
    </Content_Store>
  )
}

export default App
