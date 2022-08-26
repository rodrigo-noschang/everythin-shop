import BottomListItemContainer from "./style";

const BottomListItem = ({ item }) => {

    return (
        <BottomListItemContainer>
            <figure className = 'bottom-list-figure'>
                <img className = 'bottom-list-image' 
                    src = {item.thumbnail} 
                    alt = {item.title} />
            </figure>

            <div className = 'bottom-list-info-container'>
                <h3 className = 'bottom-list-item-name'> {item.title} </h3>
                <button className = 'bottom-list-item-see'> See Product </button>
            </div>
        </BottomListItemContainer>
    )
}

export default BottomListItem;