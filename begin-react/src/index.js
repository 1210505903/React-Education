import React from "react";
import ReactDOM from "react-dom";

import Card from './componets/Card';


const App = (props) => {
    return (
        <div>
            <div class="card-group">

                <Card cardTitle="Galatasaray"/>
                <Card cardTitle="UltraAslan"/>
                <Card cardTitle="Cimbo m"/>


            </div>
        </div>);
}

ReactDOM.render(<App />, document.getElementById("root"));
