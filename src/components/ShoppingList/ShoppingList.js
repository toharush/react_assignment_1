
import './ShoppingList.css';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import data from '../../utils/data.json';
import { useState } from 'react';

function ShoppingList() {
    const [currentActiveItem, setCurrentActiveItem] = useState(undefined);

    return <div className="shoppingListBody">
        {
            currentActiveItem ? <ShoppingListItem name={currentActiveItem.name} image_path={currentActiveItem.image_path} price={currentActiveItem.price} handleClick={() => setCurrentActiveItem(undefined)}
                isCollapse={false} new_image_path={currentActiveItem.new_image_path} description={currentActiveItem.description} store_name={currentActiveItem.store_name} /> :
                data.map(item => <ShoppingListItem handleClick={() => setCurrentActiveItem(item)} name={item.name} image_path={item.image_path} price={item.price} isCollapse={true} />)
        }
    </div>
};

export default ShoppingList;