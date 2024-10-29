import React from 'react';

const Banner = ({addCoin}) => {
    return (
        <div>
            <div className="hero bg-pink-200 ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button onClick={addCoin} className="btn btn-error">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;