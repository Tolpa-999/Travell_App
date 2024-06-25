export default function Container(probs) {
    
    // handle form inputs 
    function handleForm(e) {
        e.preventDefault()
        if (!probs.information.textInput) return;
        const newitem = { id: Date.now(), description: probs.information.textInput, quantity: probs.information.selectInput, packed: false }
        
        probs.onAddingItem(newitem)
        probs.resestInformation()
    }


    return (
        <form className="container-nav" onSubmit={handleForm}>
            <p>What Do You Need For Your 😍 Trip</p>
            <div className="second">
                <select name="num" id="num" value={probs.information.selectInput} onChange={(e) => { probs.updateSelectInput(e.target.value)}}>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((ele) => {
                        return <option value={ele} key={ele}>{ele}</option>
                    }) }
                </select>
                <input type="text" placeholder="item..." value={probs.information.textInput} onChange={(e) => {probs.updateTextInput(e.target.value)}} />
                <button>Add</button>
            </div>
        </form>
    )
}