import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchAppBar from './components/navbar';
import Chameleon from './components/chameleon';
import Salamander from './components/salamander';
import Komodo from './components/komodo';
import Turtle from './components/turtle';
import Lizard from './components/lizard';
import Alligator from './components/alligator';
import BottomAppBar from './components/bottom';
import SwipeableTextMobileStepper from './components/carousel';
import Title_modal from './components/title-carousel';

class App extends Component {
    
    constructor(props){

        super(props);

    }

    render(){


        return (    
        
            <div>
                
                <SearchAppBar/>
                <div className="centered">
                    <Chameleon/>
                    <Salamander/>
                    <Komodo/>
                    <Turtle/>
                    <Lizard/>
                    <Alligator/>

                </div>

            <Title_modal/>
            <div className="centered">
                <SwipeableTextMobileStepper/>
                <BottomAppBar/>
            </div>
                

            </div>
        );
    }

}



//take this component generated html and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));