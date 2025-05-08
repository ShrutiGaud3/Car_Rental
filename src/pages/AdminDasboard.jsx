import Sidebar from '../components/admin/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row ">
      <Sidebar />
      <div className="flex-1  md:ml-64 sm:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
