import Layout from "./componenets/Layout"
import Hero from "./componenets/Hero"
import CoffeeForm from "./componenets/CoffeeForm"
import Stats from "./componenets/Stats"
import History from "./componenets/History"
import { useAuth } from "./context/AuthContext"

function App() {
  const {globalUser,isLoading, globalData}=useAuth()
  const isAuthenticated=globalUser
  const isData= globalData && !!Object.keys(globalData || {}).length

  const authenticatedContent=(
    <>
    <Stats/>
    <History/>
    </>
  )
  return (
    <Layout>
      <Hero/>
      <CoffeeForm isAuthenticated={isAuthenticated}/>
      {(isAuthenticated && isLoading)&&(
        <p>Loading data...</p>
      )}
      {(isAuthenticated && isData) && (authenticatedContent)}
    </Layout>
  )
}

export default App
