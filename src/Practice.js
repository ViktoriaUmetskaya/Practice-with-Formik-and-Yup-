import React from 'react';

const Practice=({string,number,boolean, callback,object,array})=>{
    return <div>
        {string}
        {number}
        {boolean}
        {object.count}
        {array[0]}
        {callback(3)}
    </div>
}

export default Practice

