import Cabeza from './components/header'
import Signup from './components/signUp'
import Footer from './components/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='hader'>
        <Cabeza />
      </div>
      <div className="card">
        <Signup />
      </div>
      <div className='foot'>
        <Footer />
      </div>
      
    </div>
  )
}

export default App
