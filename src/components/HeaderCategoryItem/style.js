import styled, { keyframes } from 'styled-components';

const bounceRight = keyframes`
    0% {
        transform: translateX(0px);
    }

    30% {
        transform: translateX(8px);
    }

    100% {
        transform: translateX(0px);
    }
`;

const HeaderCategoryItemContainer = styled.li`
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 2px solid var(--purple);
    cursor: pointer;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    position: relative;

    &:hover{
        animation-name: ${bounceRight};
        animation-duration: .4s;
    }

    .header-subcategories-container {
        position: absolute;
        top: -10px;
        left: 135px;
        background-color: var(--grey);
        padding: 5px 15px 10px;
        font-size: 14px;
        z-index: 1;
        width: 150px;
    }

    .header-subcategory-item {
        border-bottom: 1px solid #fff;
        padding: 10px 0;
    }

    .header-subcategory-item:hover {
        transform: scale(1.1);
        filter: brightness(1.2);
        transition: .3s;
    }

    @media only screen and (min-width: 550px) {
        .header-subcategories-container {
            left: 165px;
        }
    }
`;

export default HeaderCategoryItemContainer;