import React from 'react';
import tamsHeadshot from '../images/tamheadshot.png';

function Approach() {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col-md-6">
        <h1> Tam's Approach</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam nec ex sed dolor posuere ullamcorper sit amet eu sem. 
              Donec mi dolor, semper sit amet euismod sed, viverra a massa. 
              Nulla sed mauris id est ullamcorper viverra viverra vitae leo. 
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

export default Approach;