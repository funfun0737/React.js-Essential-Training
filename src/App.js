import './App.css';
import logo from './logo512.png';

function Header(props) {
  return (
      <header>
        <h1>{props.name} recipe</h1>
      </header>
  )
}

function Main(props) {
    return(
        <section>
            <p>for {props.meal}</p>
            <img src = {logo} height={200}/>
            <img src ="https://github.com/eveporcello.png"/>
            <ul style={{textAlign:"left"}}>
                {props.dishes.map((dish) => (
                    <li key={dish.id}> {dish.title}</li>))}
            </ul>
        </section>
    )
}

const dishes = [
    "egg",
    "milk",
    "cream",
    "powder"
]

const dishObjects = dishes.map((dish, i) => ({id:i,title:dish}));

function Footer(props) {
    return (
        <footer>
            <p>Copyright {props.year}</p>
        </footer>
    )

}
// we create a component by creating a function
function App() {
  return (
      <div className="App">
          <Header name = "Yuqi "/>
          <Main meal = "Lunch" dishes = {dishObjects}/>
          <Footer year ={new Date().getFullYear()} />
      </div>
  );
}

export default App;
