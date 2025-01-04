import React, { useMemo, useState } from 'react';
import coursesApi from './CoursesApi';
import { IoCaretBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const CourseList = () => {
  const [data, setData] = useState(coursesApi);
  const [search, setSearch] = useState('');

  // Filter the data on the basis of course title
  const filteredData = useMemo(() => {
    return data.filter((courses) => {
      return courses.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, data]);

  return (
    <div className="bg-white py-10 rounded-xl">
      <div className="flex items-center space-x-4 mb-6 px-6">
        <Link to={'/home'}>
          <IoCaretBackCircle
            className="text-black text-5xl cursor-pointer hover:text-gray-700 transition-transform transform hover:scale-105"
            title="Go Back"
          />
        </Link>
        <span className="text-black text-2xl font-semibold">Back</span>
      </div>

      <h1 className="text-5xl font-extrabold text-center text-black mb-12">
        <span className="text-[#FE5B39]">Our</span> Courses
      </h1>

      {/* Search Bar */}
      <div className="container mx-auto px-6 mb-8">
        <div className="flex items-center space-x-4 bg-gray-100 border border-gray-300 rounded-lg p-3 shadow-sm">
          {/* Search Icon */}
          <FaSearch className="text-gray-500 text-xl" />

          {/* Search Input */}
          <input
            type="search"
            placeholder="What do you want to learn?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Map the filtered data */}
      <div className="container mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredData.map((course) => (
          <div
            key={course.id}
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl  duration-300 transition-transform flex flex-col border border-gray-200 hover:scale-95"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-gray-800">
                {course.title}
              </h2>
              <p className="text-base text-gray-600 mt-4 flex-grow">
                {course.description}
              </p>
              <div className="text-lg font-semibold text-gray-800 mt-6">
                Price: <span className="text-green-600">{course.price}</span>
              </div>
            </div>
            <Link to={`/courses/${course.id}`}>
              <button className="bg-green-500 text-white py-3 px-4 w-full text-center hover:bg-green-600 transition-colors text-lg font-medium">
                View Course
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
