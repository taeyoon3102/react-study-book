import React, { Component, useState } from 'react';

export default function R006_Lifecycle(props){

    console.log('1. constructor call');
    const [prev_prop_value, setPrev_prop_value] = useState(null);

    if(props.prop_value !== prev_prop_value){
        setPrev_prop_value(props.prop_value);
        console.log('2. getStateFromProps call : '+ props.prop_value)
    }

    console.log('3. render Call');

    return(
        <div>
            <h2>[ THIS IS LifeCycle ]</h2>
        </div>
    )    
}


// export default class R006_Lifecycle extends Component{
//     static getDerivedStateFromProps(props, state){
//         console.log('2. getStateFromProps call : '+ props.prop_value);
//         return {};
//     }
    
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