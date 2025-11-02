import Header from './components/header'
import Page2 from './components/page2'
import Page1 from './components/page1'
import Page3 from './components/page3'
import './App.css'

function App() {
  

  return (
    <>
      
      <div className="container ">
        
        <div className="">
          <Header /> 
        </div>
        <div className="home ">
          <Page1 />
        </div>
        <div className="schedule">
          <Page2 />
        </div>
        <div className="socials">
          <Page3 />
        </div>
      </div>
    </>
  )
}

export default App
