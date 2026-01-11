import Header from "./components/Header"
import Window from "./components/Window"
import SideBar from "./components/SideBar"
import PagesMain from "./PagesMain"


function App() {

  return (
    <div className="relative w-full h-full">
      <Header />
      <main className="grid md:grid-cols-[1fr_5fr] lg:grid-cols-[1fr_5fr] w-full h-full">
        <Window />
        <PagesMain />
        <SideBar />
      </main>
    </div>
  )
}

export default App
