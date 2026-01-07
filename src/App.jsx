import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Window from "./components/Window"
import Student from "./pages/Student"
import SideBar from "./components/SideBar"


function App() {

  return (
    <div className="relative w-full h-full">
      <Header />
      <main className="grid md:grid-cols-[1fr_5fr] lg:grid-cols-[1fr_5fr] w-full h-full">
        <Window />
        <Student />
        <SideBar />
      </main>
    </div>
  )
}

export default App
