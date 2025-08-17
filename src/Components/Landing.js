
import React from 'react';
import './Landing.css';
import avatar from '../assets/images/avatar.svg';

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <img src={avatar} alt="Profile" className="avatar" />
      <h1 className="greeting">Hello, I am Surbhi Yadav!</h1>
      <p className="bio">A frontend developer specialised in React who also loves cats!</p>
    </section>
  );
};

export default Landing;
