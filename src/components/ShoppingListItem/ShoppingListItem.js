
import './ShoppingListItem.css'

function ShoppingListItem(props) {

    const name = props.name;
    const image_path = props.image_path;
    const price = props.price;
    const isCollapse = props.isCollapse;
    const description = props.description;
    const new_image_path = props.new_image_path;
    const store_name = props.store_name;
    let handleClick = props.handleClick;

    return <div className="item">
        {!isCollapse && <button onClick={handleClick}>x</button>}
        <img src={image_path} className="item-image" />
        <div className="item-details">
            <div>{name}</div>
            <div>{price}</div>
            {
                !isCollapse ? <div>
                    <div>{store_name}</div>
                    <div>{description}</div>
                    <div>{new_image_path}</div>
                </div> : 
                <button onClick={handleClick}>הרחב</button>
            }
        </div>
    </div>
};

export default ShoppingListItem;