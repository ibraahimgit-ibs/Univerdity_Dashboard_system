import { Route, Routes } from 'react-router';
import Dashboard from '../components/student/dashboard/Dashboard';
import Grades from './../components/student/grades/Grades';
import Payments from "../components/student/payments/Payments"
import Profile from './../components/student/profile/Profile';

const Student = () => {

  return (
    <main className='flex-1 p-4 md:p-6'>
      <div className='m-5 mx-auto max-w-7xl'>
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
