/* eslint-disable react/prop-types */
import React from 'react';
import Available from './Available';
import Selected from './Selected';

const Main = ({ handleisActiveState, isActive, players, playerSelection, selectPlayer, removePlayer }) => {
    // console.log(isActive);

    return (
        <div className="my-20 text-center">
            <button
                onClick={() => handleisActiveState("available")}
                className={`${isActive.available ? 'bg-cyan-600 p-4 rounded-xl' : 'btn'} mr-2 cursor-pointer`}
            >
                Available
            </button>
            <button
                onClick={() => handleisActiveState("selected")}
                className={`${isActive.available ? ' btn' : 'bg-cyan-600 p-4 rounded-xl'} cursor-pointer`}
            >
                Selected {selectPlayer.length}
            </button>

            {isActive.available ? <Available players={players} playerSelection={playerSelection}/> : <Selected selectPlayer={selectPlayer} isActive={isActive} handleisActiveState={handleisActiveState} removePlayer={removePlayer}/>}
        </div>
    );
};

export default Main;
