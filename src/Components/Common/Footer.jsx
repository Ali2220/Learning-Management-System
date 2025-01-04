import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center mt-8 px-5 py-7 gap-6">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="bg-white w-40 md:w-48 h-36 md:h-40 p-3 border-2 border-black rounded-2xl">
          <p className="border border-black rounded-xl text-center px-1 text-white bg-[#BE94F5]">
            Education
          </p>
          <p className="mt-2 text-center">Subjects</p>
          <h1 className="text-3xl md:text-4xl text-center">+30</h1>
        </div>
        <div className="bg-[#BE94F5] w-40 md:w-48 h-36 md:h-40 p-3 border border-black rounded-2xl">
          <p className="border border-black rounded-xl text-center px-1 text-white bg-[#FCCC42]">
            Online
          </p>
          <p className="mt-2 text-center">Courses</p>
          <h1 className="text-3xl md:text-4xl text-center">+90</h1>
        </div>
        <div className="bg-[#FCCC42] w-40 md:w-48 h-36 md:h-40 p-3 border border-black rounded-2xl">
          <p className="border border-black rounded-xl text-center px-1 text-white bg-white">
            <span className="text-orange-600">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>{' '}
            <span className="text-black"> 5.0</span>
          </p>
          <p className="mt-2 text-center">Learner Reviews</p>
          <h1 className="text-3xl md:text-4xl text-center">+100</h1>
        </div>
      </div>
      <div>
        <img
          src="./src/assets/footer-pic.webp"
          alt="image"
          className="w-72 md:w-96 h-64 md:h-80 object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Footer;
