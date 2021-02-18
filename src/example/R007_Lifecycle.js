import React, { Component, useState, useEffect } from 'react';

export default function R007_Lifecycle(props){

    console.log('1. constructor call');
    const [prev_prop_value, setPrev_prop_value] = useState(null);
    const [tmp_state, setTmp_state] = useState(null);

    
    if(props.prop_value !== prev_prop_value){
        setPrev_prop_value(props.prop_value);
        setTmp_state(props.prop_value);
        console.log('2. getStateFromProps call : '+ props.prop_value)
    }
     

    useEffect(()=>{
        console.log('4. componentDidMount call');
        console.log('5. tmp_state : '+ tmp_state);
    }, [])


    console.log('3. render Call');

    return(
        <div>
            <h2>[ THIS IS LifeCycle ]</h2>
        </div>
    )    
}


// export default class R007_Lifecycle extends Component{
//     static getDerivedStateFromProps(props, state){
//         console.log('2. getStateFromProps call : '+ props.prop_value);
//         return {tmp_state:props.prop_value};
//     }
    
//     constructor(props){
//         super(props);
//         this.state = {};
//         console.log('1. constructor call');
//     }

//     componentDidMount(){
//         console.log('4. componentDidMount call');
//         console.log('5. tmp_state : ' +this.state.tmp_state);
//     }
    
//     render(){
//         console.log('3. render Call');
//         return(
//             <h2>[ THIS IS LifeCycle ]</h2>
//         )
//     }
// }