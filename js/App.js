/* 
<div id="parent">
    <div id="child1">
        <h1> H1 tag of child 1 </h1>
        <h2> H2 tag of child 1 </h2>
    </div>
    <div id="child2">
        <h1> H1 tag of child 2 </h1>
        <h2> H2 tag of child 2 </h2>
    </div>        
</div> 
*/

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1", {}, "H1 tag of child 1"), React.createElement("h2", {}, "H2 tag of child 1")
    ]),
    React.createElement("div", {id : "child2"}, [
        React.createElement("h1", {}, "H1 tag of child 2"), React.createElement("h2", {}, "H2 tag of child 2")
    ])
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);