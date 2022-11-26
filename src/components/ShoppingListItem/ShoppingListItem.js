import "./ShoppingListItem.css";

function ShoppingListItem(props) {
  const name = props.name;
  const image_path = props.image_path;
  const price = props.price;
  const isCollapse = props.isCollapse;
  const description = props.description;
  const new_image_path = props.new_image_path;
  const store_name = props.store_name;
  const handleClose = props.handleClose;
  const handleExpand = props.handleExpand;

  return (
    <a className="item" onClick={handleExpand}>
      {!isCollapse && (
        <button onClick={handleClose} className="x">x</button>
      )}
      <img src={image_path} className="item-image" />
      <div className="item-details">
        {!isCollapse && (
          <div>
            <div className="item-store-name">{store_name}</div>
          </div>
        )}
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
        {!isCollapse && (
          <div>
            <div className="item-description">{description}</div>
            <img src={new_image_path} className="item-details-image" />
          </div>
        )}
      </div>
    </a>
  );
}

export default ShoppingListItem;
