import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './views/Home'
import { Favoritos } from './views/Favoritos'
import { Menu } from './components/Menu'
import { FotosContext } from './context/fotoscontext'
import { useEffect, useState } from 'react'

function App() {

  const [photos, setPhotos] = useState([]);

  const sharedState = { photos, setPhotos };

    
  const getPhotos = async () => {
      const response = await fetch("../../public/fotos.json");
      const data = await response.json();

      setPhotos(data.photos);

  }

  useEffect(() => {
    getPhotos()
}, []);

  return (
    <>
        <FotosContext.Provider value={sharedState}>
            <BrowserRouter>

                <Menu></Menu>

                <Routes>
                  <Route path="/" element={ <Home></Home> }></Route>
                  <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
                </Routes>

            </BrowserRouter>
        </FotosContext.Provider>
    </>
  )
}

export default App
