import useState from "react"

// const [movies, setMovies] = useState();

export const getMovies = async () => {
  const res = await fetch('http://localhost:8080/movies')
  const data = await res.json()

  return {

  }
}