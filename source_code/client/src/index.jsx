
import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MyAdditionForm } from './MyAdditionForm';
//Import your custom css using
//import './index.css';

//IMPORTANT : Component should start with Upper case
class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello,
                    <small className="text-muted">With faded secondary world!</small>
                </h1>

                <div className="container">
                    <div className="row">
                        <MyAdditionForm />
                    </div>


                    <div class="row justify-content-center p-3">
                        <div class="col-auto">
                            <img src="https://418assignment3.s3.us-east-2.amazonaws.com/bimmer.jpeg" alt = "s3 bucket" width="300" height="200" />
                        </div>
                        <div class="col-auto">
                            <h1>
                                Joshua Gonzalez
                            </h1>
                            <p>
                                lorem ipsum
                            </p>
                        </div>
                    </div>


                </div>

            </div>


        );
    }
}
//Tell ReactDOM to find the div with id=root 
//and place the MyFirstComponent there.
ReactDOM.render(<MyFirstComponent />, document.getElementById("root"));