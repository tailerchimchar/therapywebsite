import React from 'react';
import tamsHeadshot from '../images/tamheadshot.png';

function Home() {
  return (
    <div>
      <h1>Welcome to Tam's Therapy Startup home page</h1>
      <div className="headshot-container">
        <img src={tamsHeadshot} alt="Tam's Headshot" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nam nec ex sed dolor posuere ullamcorper sit amet eu sem. 
         Donec mi dolor, semper sit amet euismod sed, viverra a massa. 
         Nulla sed mauris id est ullamcorper viverra viverra vitae leo. 
         
       </p>
      <p>
      Nulla pellentesque dignissim odio vitae eleifend. 
      Sed vel molestie erat, et congue arcu. 
      Praesent pulvinar, purus eu vehicula volutpat, enim purus congue justo, vel vulputate sem turpis non nunc. 
    
      </p>

      <a class="btn btn-large btn-success" href="#"><i class="icon-truck"></i> Sign up today</a>


    </div>
  );
}

export default Home;
