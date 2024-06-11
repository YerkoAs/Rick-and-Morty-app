
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationCard from './components/LocationCard'
import ResidentsCard from './components/ResidentsCard'
import Pages from './components/Pages'

function App() {
  const randomId = Math.floor(Math.random() * 126 ) + 1
  const [location, getLocation, loading, error] = useFetch()
  const [changer, setchanger] = useState('earth')
  const [page, setpage] = useState(1)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/?name=${changer}`
    getLocation(url) 
  }, [changer])
  
  
  const textInput = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    setchanger(textInput.current.value.trim().toLowerCase())
    textInput.current.value = ''
  }

  const quantity = 8
  const total = Math.ceil(location?.results[0].residents.length/quantity)
  console.log(total)
  const pagination = () => {
    const end = quantity * page
    const start = end - quantity
    const resi = location?.results[0].residents.slice(start, end)
    return [resi]
  }
  return (
    <div className='app'>
      
      {
      
        loading?
          <h2 className='app-loading'>Loading.....</h2>
        :
          <>
            <figure className='app-banner'>
              <img className='app-banner-img' src="../Frame 259.png" alt="Rick and Morty Banner" />
            </figure>
            <form onSubmit={handleSubmit} className='app-form'>
              <input className='app-form-input' placeholder='Type a location...' type="text" ref={textInput}/>
              <button className='app-form-button'>Search</button>
            </form>
            
            {
              error?
                <h2 className='app-error'>❌Hey!! you must provide a valid location 😥</h2>
              :
                <>
                  <LocationCard
                    info = {location}
                  />

                  <div>
                  <Pages
                      page={page}
                      setpage={setpage}
                      total={total}
                    />
                  </div>

                  <div className='app-container'>
                    {
                      pagination()[0]?.map((characters) => (
                        <ResidentsCard
                          key = {characters}
                          info = {characters}
                        
                        />
                      ))
                        
                    }
                    
                  </div>
                </>
            }
          </>
      }
   

    
    
      
    
    </div>
  )
}

export default App
