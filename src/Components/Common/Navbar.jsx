import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(AuthContext);
  console.log(userData);

  // const handleLogout = () => {
  //   console.log('Logout triggered!');
  //   navigate('/'); // Navigate to login page
  // };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="mb-3 md:mb-0">
        <Link to={'/home'}>
          <h2 className="text-2xl font-bold">
            <span className="text-[#FE5B39]">Edu</span>Elevate
          </h2>
        </Link>
      </div>
      <div className="flex gap-5 text-lg md:text-xl">
        <Link to={'/about'}>About</Link>
        <Link to={'/courses'}>Courses</Link>
      </div>

      <div className="mt-3 md:mt-0">
        <Link to={'/'}>
          <button
            // onClick={handleLogout}
            className="border border-black bg-[#FE5B39] text-white rounded-xl px-4 py-2"
          >
            LogOut
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
