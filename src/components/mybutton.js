import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class MyButton extends Component {

    render(){

        return (
            
            <div className="mybutton">
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    };
};

export default MyButton;
