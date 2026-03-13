import Chai from "./chai"

function App() {
  const username = "yogii.."

  return (
  //  <h1>chai aur react with vite</h1>   --only one element can export
  <>
  <Chai/>
  <h1>chai aur react {username}</h1>
  <p>test para</p>
  </>
  )
}

export default App
