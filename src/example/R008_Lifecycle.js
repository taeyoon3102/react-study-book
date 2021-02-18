import React, { Component, useState, useEffect } from 'react';

export default function R008_Lifecycle(props){

    console.log('1. constructor call');
    //const [prev_prop_value, setPrev_prop_value] = useState(null);
    const [tmp_state, setTmp_state] = useState(props.prop_value);
    const [tmp_state2, setTmp_state2] = useState(null);

    console.log('2. getStateFromProps call : '+ tmp_state)
    
    // if(props.prop_value !== prev_prop_value){
    //     setPrev_prop_value(props.prop_value);
    //     setTmp_state(props.prop_value);
    //     console.log('2. getStateFromProps call : '+ props.prop_value)
    // }
     

    useEffect(()=>{
        console.log('4. componentDidMount call');
        console.log('5. tmp_state : '+ tmp_state);
        setTmp_state2(props.prop_value);
    }, [])

    useEffect(()=>{
      if(tmp_state2 !== null)
        console.log('6. shouldComponentUpdate call / tmp_state2=' +tmp_state2);
    }, [tmp_state2])



    console.log('3. render Call');

    return(
        <div>
            <h2>[ THIS IS LifeCycle ]</h2>
        </div>
    )    
}


// export default class R008_Lifecycle extends Component{
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
//         this.setState({tmp_state2:true});
//     }

//     shouldComponentUpdate(props, state){
//         console.log('6. shouldComponentUpdate call / tmp_state2=' +state.tmp_state2);
//         return state.tmp_state2;
//     }
    
//     render(){
//         console.log('3. render Call');
//         return(
//             <h2>[ THIS IS LifeCycle ]</h2>
//         )
//     }
// }