export default function Item(probs) {
    return (
        <li>
            <input type="checkbox"  value={probs.packed}  onChange={() => {probs.onTriggerPack(probs.id); }} />
            <span style={probs.packed ? {textDecoration: "line-through"} : {}} id={probs.id}>{probs.quan} {probs.desc}</span>
            <button onClick={() => probs.onDeletingItem(probs.id)}>x</button>
        </li>
    )
}