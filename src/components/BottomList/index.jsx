import BottomListContainer from "./style";
import BottomListItem from "../BottomListItem";

const BottomList = ({ bottomList }) => {
    
    return (
        <BottomListContainer>
            { 
                bottomList.map(item => 
                    <BottomListItem key = {item.id} item = {item}/>
                )
            }
        </BottomListContainer>
    )
}

export default BottomList;