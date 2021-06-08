

export default function MenuItem(props) {
    const item = props.item
    return (
        <div
            className='menuItem'
            style={{ backgroundColor: item.selected ? 'blue' : null }}
        >
            {props.item.name}
       </div>
    )
}