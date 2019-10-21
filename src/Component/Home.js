import React from "react";
import {TimelineMax, CSSPlugin, ScrollToPlugin, Draggable} from "gsap/all";
import { TLSSocket } from "tls";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state={
            exp: 0,
            expS: {
                backgroundColor: 'red',
                height: "5vw",
                width: "0%"
            }
        }
    }



    handleEXP() {

    }

    demoIncreaseEXP= () => {
        // this.setState({expS: {
        //     ...this.state.expS,
        //     width: (parseInt(this.state.expS.width[0]) + 1) + "0%"
        // }})
        this.setState({exp: this.state.exp + 100});
        let ana = new TimelineMax()
        ana.to(".theexp", 2, {width: (this.state.exp + 100) / 10 + "%"})
        console.log( (this.state.exp + 100) / 10 + "%")
    }

render() {
    let expbar = {
        backgroundColor: 'green',
        height: "5vw",
        width: "15vw"
    }


    return(
        <>
            <div 
            className="thebar"
            style={(expbar)}
            >

                <div className="theexp"
                style={this.state.expS}>

                </div>
        
                    

            </div>
            <button onClick={this.demoIncreaseEXP}>add exp</button>



        </>
    )
}
}

