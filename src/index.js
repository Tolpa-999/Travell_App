import React from "react";
import ReactDOM from "react-dom/client"
import "./style.css"
import Header from "./Header";
import Container from "./Container";
import Section from "./Section";
// import Footer from 'Footer'
import Footer from "./Footer";




// Main component of all componets
function App() {

    
    
    // Items that added in the items
    
    const [items, setItems] = React.useState([])

    // if (localStorage.getItem("items") !== '[]') {
    //     console.log("first condition done");
    //     console.log(items);
    //     console.log(JSON.parse(localStorage.getItem("items")))
    //     console.log(localStorage.getItem("items") == JSON.stringify(items)) 
    //     if (localStorage.getItem("items") === JSON.stringify(items)) {
    //     // console.log(JSON.parse(localStorage.getItem("items")))
    //     // setItems( () => [...JSON.parse(localStorage.getItem("items"))])
    //         // console.log([...JSON.parse(localStorage.getItem("items"))]);
    //         const pla = JSON.parse(localStorage.getItem("items"))
    //         setItems(pla)
    //         console.log("done")
    //         // console.log(items);
    //     }
    // }

    // if (JSON.parse(localStorage.getItem("items"))) {
    //     setItems([...localStorage.getItem("items")])
    // } 

    // console.log(typeof JSON.parse(localStorage.getItem("items")))
    // console.log(JSON.parse(localStorage.getItem("items")))

    

    // push new item 
    function addEm(newitem) {
        setItems(prev => [...prev, newitem])
        // localStorage.setItem("items", JSON.stringify(items))
        // console.log(items)
        
        
    }


    function deleteItem(deletedTarget) {
        const result = items.filter((ele) => 
            ele.id !== deletedTarget
        )
        setItems(result)
    }



    // trigger pack value to true or false
    function triggerPack(id) {
        setItems(prev => 
            prev.map((item) => 
                item.id === id ? {...item, packed: !item.packed} : item
            )
        )
    }

    // make the item state empty
    function clearAll() {
        setItems([]);
    }




    // numbers of items added
    const x = items.filter((item) => item.packed).length

    // make the form controled element 
    const [information, setDescription] = React.useState({ textInput: "", selectInput: 1 })

    function updateTextInput(value) {
        setDescription((prev) => { return {...prev, textInput: value}})
    }
    
    function updateSelectInput(value) {
        setDescription((prev) => { return {...prev, selectInput: +value}})
    }
    
    function resestInformation() {
        setDescription({ textInput: "", selectInput: 1 })
    }
    return (
        <>
            <Header />
            <Container item={items} onAddingItem={(item) => addEm(item)} information={information} updateTextInput={updateTextInput} updateSelectInput={updateSelectInput} resestInformation={resestInformation} />
            <Section item={items} onDeletingItem={(d) => deleteItem(d)} onTriggerPack={triggerPack} onCheck={x} clearAll={clearAll} resestInformation={resestInformation} />
            <Footer length={items.length} packedItems={x}  />
        </>
    )
}













// React v18  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before v18
// React.render(<App/>)