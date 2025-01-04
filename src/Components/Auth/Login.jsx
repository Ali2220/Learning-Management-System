import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Home from '../../Pages/Home';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false); // isSignup true hoga to signup form dikhe ga, isSignup false hoga to login form dikhe ga.
  const [user, setUser] = useState(null);  // Login hone ke baad current user ka data store karta hai

  const [userData, setUserData] = useContext(AuthContext); // Existing users
  
  console.log(isSignup);
  
  // Signup Function
  const handleSignup = (email, password) => {
    if (!email || !password) {
      alert('Email aur password dono required hain!');
      return;
    }

    // Check if user already exists
    const existingUser = userData.find((user) => user.email === email);
    if (existingUser) {
      alert('User already exists! Please login.');
      return;
    }

    // Save new user
    const newUser = { email, password }; 
    // const updatedUserData = [...userData, newUser] --> is line ka mtlb hai ke jo users hain aun mai newUser bhi add krdo
    const updatedUserData = [...userData, newUser];
    setUserData(updatedUserData); // Context update
    localStorage.setItem('users', JSON.stringify(updatedUserData)); // Save to localStorage
    alert('Signup successful! Ab login karein.');
    setIsSignup(false);
  };

  // Login Function
  const handleLogin = (email, password) => {
    // agr sirf email dali or password nhi dala to ye alert mile ga, and vice versa.
    if (!email || !password) {
      alert('Email aur password dono required hain!');
      return;
    }

    // check kr rhe hain k kia user ki email and password match ho rha hai jo localStorage mai save hain.
    const loggedInUser = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (loggedInUser) {
      setUser(loggedInUser); // Successful login
    } else {
      alert('User not found!');
    }
  };

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (isSignup) {
      handleSignup(email, password);
    } else {
      handleLogin(email, password);
    }

    setEmail('');
    setPassword('');
  };

  // agr user true hai to home page pr redirect hojae ga.
  if (user) {
    return <Home />;
  }

  return (
    <div className="p-6 bg-[#BEAFD2] min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">
          {isSignup ? 'Create Account' : 'Welcome Back'}
          <span style={{ color: '#FE5B39' }}>!</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {isSignup
            ? 'Signup to create an account'
            : 'Please login to your account'}
        </p>

        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FE5B39] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FE5B39] focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FE5B39] text-white py-2 rounded-lg font-semibold hover:bg-[#e65332] transition-colors"
          >
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-4">
          {isSignup ? (
            <span>
              Already have an account?{' '}
              <button
                onClick={() => setIsSignup(false)}
                className="text-[#FE5B39] font-semibold underline"
              >
                Login
              </button>
            </span>
          ) : (
            <span>
              New user?{' '}
              <button
                onClick={() => setIsSignup(true)}
                className="text-[#FE5B39] font-semibold underline"
              >
                Signup
              </button>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
