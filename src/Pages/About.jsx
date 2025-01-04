import React from 'react';
import { IoCaretBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="p-6 bg-[#BEAFD2]">
      <div className="bg-white rounded-xl p-5">
        <div className="text-center mb-8">
          <Link to={'/home'}>
            <IoCaretBackCircle
              className="text-black text-5xl cursor-pointer hover:text-gray-700 transition-transform transform hover:scale-105"
              title="Go Back"
            />
          </Link>
          <h1 className="text-4xl font-bold">
            <span style={{ color: '#FE5B39' }}>About</span> Us
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
          <div className="text-lg lg:w-1/2">
            <p>
              At <span style={{ color: '#FE5B39' }}>EduElevate</span>, we strive
              to empower learners by providing access to high-quality education
              tailored to their needs. Our platform is built for students,
              professionals, and lifelong learners who aim to enhance their
              skills and knowledge.
            </p>
            <p className="mt-4">
              We offer a diverse range of courses taught by certified experts,
              ensuring you get the best learning experience. With
              <span style={{ color: '#FE5B39' }}> flexible schedules</span>,
              engaging materials, and an inclusive community, we are here to
              help you reach your goals.
            </p>
            <p className="mt-4">
              Whether you're looking to upskill, switch careers, or explore new
              interests, <span style={{ color: '#FE5B39' }}>EduElevate</span>{' '}
              provides the right tools and support to help you succeed.
            </p>
          </div>
          <div>
            <img
              src="./src/assets/about.webp"
              alt="Learnify About"
              className="w-80 h-80 object-cover rounded-2xl border-2 border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
