import SboAdmin from "./pages/SboAdmin";
import Student from './pages/Student';

const PagesMain = () => {
    return (
        <main className='flex-1 p-4 md:p-6 max-w-full min-w-full scrollbar-hide'>
            <Student />
            <SboAdmin />
        </main>
    )
}

export default PagesMain;