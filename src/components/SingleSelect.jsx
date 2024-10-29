import React from 'react';

const SingleSelect = ({select, removePlayer}) => {
    return (
        <div className='border my-8 text-left bg-green-200 p-4 flex justify-between'>

            <div>
            <h3 className='text-2xl font-bold mb-3'><span className='font-semibold'>Name</span> : {select.name}</h3>
            <p><span className='font-semibold text-blue-900'>Role</span> : {select.role}</p>
            <p><span className='font-semibold text-blue-900'>Country</span> : {select.country}</p>
            </div>
           
           <div>
           <button onClick={()=>removePlayer(select.playerid)} className='btn bg-pink-400'>Remove</button>
           </div>
        </div>
    );
};

export default SingleSelect;