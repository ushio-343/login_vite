import Cabeza from './components/header'
import Signup from './components/signUp'
import Footer from './components/footer'
import './App.css'

function App() {

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
