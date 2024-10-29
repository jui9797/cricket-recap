import React from 'react';
import Player from './Player';

const Available = ({players, playerSelection}) => {
    
    return (
        <div className='my-10 border'>
            <h1>Available players: {players.length} </h1>

            <div className='grid lg:grid-cols-3 gap-5 mx-auto w-11/12'>
            {
                players.map(player=><Player key={player.playerid} player={player} playerSelection={playerSelection}></Player>)
            }
            </div>
        </div>
    );
};

export default Available;