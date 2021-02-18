import React, { Component, useState } from 'react';

export default function R005_Lifecycle(props){

    const [count, setCount] = useState(0);
    console.log('1. constructor call');

    console.log('3. render Call');

    return(
        <div>
            <h2>[ THIS IS LifeCycle ]</h2>
            <h2> count : {count} </h2>
        </div>
    )    
}


// export default class R005_Lifecycle extends Component{
//     constructor(props){
//         super(props);
//         this.state = {};
//         console.log('1. constructor call');
//     }
    
//     render(){
//         console.log('3. render Call');
//         return(
//             <h2>[ THIS IS LifeCycle ]</h2>
//         )
//     }
// }