import React, {Component} from 'react';

export default class FilterObject extends Component {

    constructor(){
        super();
        this.state = {
            unFilteredArray:[{}],
            userInput:"",
            filteredArray:[]
        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }


    render(){
        return(
            
                <div className="puzzleBox filterObjectPB">
                    <h4>Filter Object</h4>
                    <span className="puzzleText">unFilteredArray:{ JSON.stringify(this.state.employees, null, 10) } </span>
                    <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value) }></input>
                    <button className="confirmationButton" onClick={() => { this.filteredArray(this.state.userInput)}}> Filter ><button/>
                    <span className="resultsBox filterObjectRB">filteredArray: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>



                </div>        
        )
    }
}