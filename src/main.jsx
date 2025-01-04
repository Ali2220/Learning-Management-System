import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Courses from './Pages/Courses.jsx';
import Login from './Components/Auth/Login.jsx';
import CourseDetail from './Components/Courses/CourseDetail.jsx';
import QuizPage from './Components/Quiz/QuizPage.jsx';
import AuthProvider from './Context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Login />,
  },

  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetail />,
  },
  {
    path: '/quiz/:id',
    element: <QuizPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
