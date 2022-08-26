import styled from 'styled-components';

const BottomListItemContainer = styled.li`
    width: 215px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    
    .bottom-list-info-container {
        padding: 10px;
        background-color: #CCC;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
    }

    .bottom-list-figure, .bottom-list-image {
        width: 215px;
        height: 140px;
        object-fit: cover;
    }

    .bottom-list-item-name {
        text-align: center;
        margin-bottom: 10px;
    }

    .bottom-list-item-see {
        border: none;
        background-color: transparent;
        font-weight: bold;
        display: block;
        color: var(--purple);
        margin: 0 auto;
        font-size: 16px;
        cursor: pointer;
    }
`;

export default BottomListItemContainer;