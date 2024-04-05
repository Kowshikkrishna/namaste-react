const heading = React.createElement("h1" , {id : "heading"}, "Hello World from Reactz!");

console.log(heading);
//root is a code where all our rendering happens
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div" , {id : "parent"},
    React.createElement("div" , {id : "child"}, 
        [React.createElement("h1" , {id : "heading"}, "Hello !"),React.createElement("h1" , {id : "heading2"}, "Hello2 !")]
    )
 )


root.render(parent);
console.log(parent) 