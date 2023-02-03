import Header from './components/Header.js'
import Card from './components/Card.js'
import data from './data.js'

function App() {
  const cards = data.map((item) => {
    return (
    <Card
    data={item}
    />
    )
  })     

  return (
    <>
      <Header />
      <section>
        {cards}
      </section>
    </>
  );
}

export default App;
