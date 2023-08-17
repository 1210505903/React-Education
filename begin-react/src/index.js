import React from "react"; 
import ReactDOM from "react-dom";


/*
class App2 extends React.Component{
    render(){
        return <h1>Benim Adım Yusuff222 </h1>;
    }
}*/

const names = ["Nilay","Ceren","Emre"]

function App(){
    return(
        <div>
            {names.map(name=> (<h1>{name}</h1>))}
        </div>);
}

ReactDOM.render( <App/>,document.getElementById("root"));
   