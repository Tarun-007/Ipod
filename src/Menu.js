
import MenuItem from './MenuItem'

export default function Menu(props) {
    const { items } = props;
    return (
        <div className="Menu">
            <div className="title">Menu Title</div>
            {items.map((item) => {
                    return (
                        <MenuItem item={item}/>
                    )

                })
                
            }
        </div>
    )
}