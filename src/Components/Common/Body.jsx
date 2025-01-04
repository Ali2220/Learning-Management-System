import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center lg:text-left">
            Find the right
            <span className="text-[#FE5B39]">
              <br /> course
            </span>{' '}
            for you
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4 text-center">Certified teachers only</p>
          <div className="flex justify-center">
            <img
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
              src="https://www.shutterstock.com/shutterstock/photos/2083103512/display_1500/stock-photo-photo-of-teacher-millennial-wavy-hairdo-lady-crossed-arms-wear-white-shirt-isolated-on-blue-color-2083103512.jpg"
              alt=""
            />
            <img
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full relative -left-3"
              src="https://www.shutterstock.com/shutterstock/photos/2004328940/display_1500/stock-photo-portrait-of-handsome-cheerful-grey-haired-man-holding-globe-knowledge-tutor-isolated-over-bright-2004328940.jpg"
              alt=""
            />
            <img
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full relative -left-6"
              src="https://www.shutterstock.com/shutterstock/photos/2181121721/display_1500/stock-photo-photo-of-cheerful-friendly-person-arm-fingers-counting-beaming-smile-isolated-on-violet-color-2181121721.jpg"
              alt=""
            />
            <img
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full relative -left-9"
              src="https://www.shutterstock.com/shutterstock/photos/1893513448/display_1500/stock-photo-portrait-of-attractive-woman-hold-hug-book-eyewear-look-camera-isolated-on-pastel-blue-color-1893513448.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center lg:text-left">
        <p className="text-lg">
          See your personalized recommendations <br /> based on your interests
          and goals
        </p>
      </div>

      <div className="mt-10 text-center lg:text-left">
        <button className="border border-black bg-[#FE5B39] text-white rounded-xl px-5 py-2">
          <Link to={'/courses'}>Find Course</Link>
        </button>
      </div>
    </div>
  );
};

export default Body;
