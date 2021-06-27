import MenuItem from "./MenuItem";

export default function Menu(props) {
  const { items, title } = props;
  return (
    <div className="Menu openMenu">
      <div className="title">
        <span>{title}</span>
      </div>
      {items.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </div>
  );
}
