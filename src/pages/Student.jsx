import { Route, Routes } from 'react-router';
import Dashboard from '../components/student/dashboard/Dashboard';
import Grades from './../components/student/grades/Grades';
import Payments from "../components/student/payments/Payments"
import Profile from './../components/student/profile/Profile';

const Student = () => {

  return (
    <main className='flex-1 lg:p-4 md:p-6 sm:p-2 max-w-[210vh] min-w-100'>
      <div className=' mx-auto max-w-7xl'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/grades' element={<Grades />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </main>
  )
}

export default Student;
