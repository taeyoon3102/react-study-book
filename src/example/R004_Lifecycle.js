import React, { Component } from 'react';

export default function R004_Lifecycle(){

    console.log('3. render Call');

    return(
        <h2>[ THIS IS LifeCycle ]</h2>
    )    
}


// export default class R004_Lifecycle extends Component{
//     render(){
//         console.log('3. render Call');
//         return(
//             <h2>[ THIS IS LifeCycle ]</h2>
//         )
//     }
// }