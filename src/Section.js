import React from "react";
import Item from "./Items";

export default function Section(probs) {
    // technique of sort items 
    const [sortBy, setSortBy] = React.useState("input")

    let sortedItems;

    if (sortBy === "input") sortedItems = probs.item

    if (sortBy === "description") sortedItems = probs.item
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    
    if (sortBy === "packed") sortedItems = probs.item
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));


    // map over all the items in the item state
    const items = sortedItems.map(ele =>{ 
        return <Item desc={ele.description} quan={ele.quantity} packed={ele.packed} key={ele.id} onDeletingItem={probs.onDeletingItem} id={ele.id} onTriggerPack={probs.onTriggerPack} onCheck={probs.onCheck} />
    })
    return (
        <section>
            <ul className="first">
                {items}
            </ul>
            <div className="last">
                <select name="num" id="num" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <option value="input">Sort By Input Order</option>
                        <option value="description">Sort By Description</option>
                        <option value="packed">Sort By Packed Statues</option>
                </select>
                <button onClick={() => {
                    const confirm = window.confirm("You sure you want to delete all >")
                    if (confirm) {
                        probs.clearAll(); setSortBy("input"); probs.resestInformation()
                    }
                }}>Clear List</button>
            </div>
        </section>
    )
}