import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero my-20 w-10/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <div className='relative w-1/2'>
          <img src={person} className="rounded-lg shadow-2xl w-4/5 h-full" alt='' />
          <img src={parts} className="absolute rounded-lg shadow-2xl w-3/6 h-auto top-1/2 border-4 right-5" alt='' />
        </div>
        <div className='w-1/2'>
          <p className='text-orange-600 mb-5 font-bold'>About Us</p>
          <h1 className="text-5xl font-bold">
            We are quialified
            <br />
            & of experience
            <br />
            in this field
          </h1>
          <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;