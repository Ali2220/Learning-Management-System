import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import coursesApi from './CoursesApi';
import { IoCaretBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
  // ye id browser k link se fetch hogi. Example (agr link hai : localhost:5173/courses/1 to id k andr 1 store ho jae ga. Yahan humne useParams() hook is liye use kia hai takay hum browser se id fetch kra skein).
  const { id } = useParams();

  // User ko programmatically navigate karane ke liye use krte hain useNavigate() hook (e.g., back button)
  const navigate = useNavigate();

  // parseInt(id) ki zarurat hai kyunki id string format mein hoti hai, aur comparison ke liye integer chahiye.
  const course = coursesApi.find((course) => {
    return course.id === parseInt(id);
  });

  // agr course nhi mila to Course not found show hoga
  if (!course) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold text-black">
          {' '}
          <span className="text-[#FE5B39]">Oops!</span> Course not found!
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-gray-300 px-6 py-3 rounded hover:bg-gray-400 text-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-b from-[#BEAFD2] to-[#836ca1] min-h-screen ">
        <div className="container mx-auto py-12 px-4 lg:px-16">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 bg-gray-700 text-white px-6 py-3 rounded hover:opacity-90 transition-all"
          >
            <span className="flex items-center gap-2">
              <IoCaretBackCircle className="text-lg" />
              Go Back
            </span>
          </button>

          <div className="bg-gray-200 shadow-2xl rounded-lg overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-8">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                {course.title}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {course.description}
              </p>
              <div className="text-2xl font-semibold text-gray-800 mb-6">
                Price:{' '}
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded">
                  ${course.price}
                </span>
              </div>

              <div className="flex gap-2">
                <a href={course.link}>
                  <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded hover:opacity-90 transition-all text-lg">
                    Access Course
                  </button>
                </a>
                <Link to={`/quiz/${id}`}>
                  <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded hover:opacity-90 transition-all text-lg">
                    Take Quiz
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
