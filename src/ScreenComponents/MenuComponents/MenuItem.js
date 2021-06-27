export default function MenuItem(props) {
  const item = props.item;
  return (
    <div className={item.selected ? "menuItem highLightItem" : "menuItem"}>
      {props.item.name}
    </div>
  );
}
