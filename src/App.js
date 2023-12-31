import {Route, Routes} from 'react-router-dom'
import Newyear from './Pages/Newyear'
import Home from './Pages/Home'
import Keren from './Pages/Keren'
import Awal from './Pages/Awal'


function App() {
  return (
    <>  
    <Routes>
      <Route index element={<Awal/>}/>
      <Route path='/home' element={<Awal/>} />
      <Route path='/foto' element={<Home/>} />
      <Route path='/newyear' element={<Newyear/>} />
      <Route path='/kespes' element={<Keren/>} />
    </Routes>
   
    </>
  )
}

export default App;
