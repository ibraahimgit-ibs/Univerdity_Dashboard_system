import { useEffect } from "react"
import Header from "./components/Header"
import Window from "./components/Window"
import SideBar from "./components/SideBar"
import PagesMain from "./PagesMain"
import axios from "axios"
import { userDataState } from "./atom/atom"
import { useRecoilState } from "recoil"


function App() {
  const [_, setStudentData] = useRecoilState(userDataState);

useEffect(() => {
  async function fetchData() {  
    try {
      const respons = await axios.get('http://localhost:8080');
      setStudentData(respons.data);
      console.log(respons.data);
     } catch (err) {
      console.error(err);
    }
  }

  fetchData();
}, [setStudentData]);

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
