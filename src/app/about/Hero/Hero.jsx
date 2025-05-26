import React from 'react';
import './hero.css';

const About = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="content">
          <h1>About our Clinic</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.
            Phasellus velit risus, euismod a lacus et, mattis condimentum augue.
          </p>
          <a href="#" className="btn">View All Departments</a>
        </div>
      </div>
    </section>
  );
};

export default About;
