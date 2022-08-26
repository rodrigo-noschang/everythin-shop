import styled from 'styled-components';

const BottomListContainer = styled.aside`
    display: flex;
    overflow-x: scroll;
    background-color: var(--grey);
    padding: 20px 10px;
    margin: 40px 0 20px;

    @media only screen and (min-width: 1200px) {
        padding: 20px 100px;
    }
`;

export default BottomListContainer;