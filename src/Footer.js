export default function Footer(probs) {
    if (!probs.length) {
        return (
            <footer>
                Start adding some items to your packing list 🚀
            </footer>
        )
    }

    return (
        <footer>
            
            {+(probs.packedItems/probs.length*100).toFixed(0) !== 100 ? <p> 💼 You have {probs.length} items in your list, You Already Packed {probs.packedItems} ({probs.packedItems === 0 ? 0 : (probs.packedItems/probs.length*100).toFixed(0) }%)</p> : <p>You got everything ready to go ✈️</p>  }
            
        </footer>
    )
}