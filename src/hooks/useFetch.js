import { useState } from "react"
import axios from "axios"

const useFetch = () => {
  const [apiData, setapiData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const getApi = url => (
    setLoading(true),
    axios.get(url)
    .then(res => {
      setapiData(res.data)
      setError(false)
    })
    .catch(err => {
      console.log(err)
      setError(true)
    })
    .finally(() => {
      setTimeout(() => {
       setLoading(false) 
      }, 750);
    })
  )
  return [apiData, getApi, loading, error]
}

export default useFetch