import {Route, Routes} from 'react-router-dom'
import Newyear from './Pages/Newyear'
import Home from './Pages/Home'
import Keren from './Pages/Keren'


function App() {
  return (
    <>  
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/foto' element={<Home/>} />
      <Route path='/newyear' element={<Newyear/>} />
      <Route path='/kespes' element={<Keren/>} />
    </Routes>
   
    </>
  )
}

export default App;
