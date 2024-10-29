import React from 'react';
import SingleSelect from './SingleSelect';

const Selected = ({selectPlayer, isActive, handleisActiveState, removePlayer }) => {
    return (
        <div className='my-10 border'>
            <h1>selected tab : {selectPlayer.length}</h1>

            <div className='grid grid-cols-2 gap-5'>
                {
                    selectPlayer.map((select, idx) =><SingleSelect key={idx} select={select} removePlayer={removePlayer}></SingleSelect>)
                }
            </div>

            <div className='flex justify-center  items-center'>
            <button
                onClick={() => handleisActiveState("available")}
                className={`${isActive.available ? 'bg-cyan-600 p-4 rounded-xl' : 'btn'} mr-2 cursor-pointer`}
            >
               Add More
            </button>
            </div>
        </div>
    );
};

export default Selected;