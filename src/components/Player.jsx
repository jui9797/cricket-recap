import React from 'react';

const Player = ({player, playerSelection}) => {
    return (
        <div>
           <div className="card bg-pink-200 w-96 shadow-xl border-2">
  <figure className="px-10 pt-10">
    <img
      src={player.img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{player.name}</h2>
    <div className='flex gap-8'>
        <p>Id: {player.playerid}</p>
        <p>Role:  {player.role}</p>
    </div>
    <div className='flex gap-8'>
        <p>Country: {player.country}</p>
        <p>Price: {player.price}</p>
    </div>
    <p>Famous player of the world.</p>
    <div className="card-actions">
      <button onClick={()=>playerSelection(player)} className="btn btn-error">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Player;