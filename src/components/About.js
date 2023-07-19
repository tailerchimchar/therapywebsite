import React from 'react';
import tamsHeadshot from '../images/tamheadshot.png';

function AboutMe() {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col-md-6">
        <h1> About Me</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam nec ex sed dolor posuere ullamcorper sit amet eu sem. 
              Donec mi dolor, semper sit amet euismod sed, viverra a massa. 
              Nulla sed mauris id est ullamcorper viverra viverra vitae leo. 
          </p>
          <p>
              Nulla pellentesque dignissim odio vitae eleifend. 
              Sed vel molestie erat, et congue arcu. 
              Praesent pulvinar, purus eu vehicula volutpat, enim purus congue justo, vel vulputate sem turpis non nunc. 
          </p>        
      </div>
      <div className="col-md-6">
        {/* Insert headshot image here */}
        <img src={tamsHeadshot} alt="Tam's Headshot" width = "300px" />
      </div>
    </div>
  </div>
  );
}

export default AboutMe;