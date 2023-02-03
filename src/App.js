import Header from './components/Header.js'
import Card from './components/Card.js'
import data from './data.js'
import Weather from './components/Weather'

function App() {
  const cards = data.map(item => {
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
      <Weather />
    </>
  );
}

export default App;
