import styled from "styled-components";

export const MainContainer = styled.div`
    max-width: 900px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`
export const LeftSide = styled.div`
    display: flex
    flex-direction: column;
    width: auto;

    @media (max-width: 750px) {
        margin-bottom: 50px;
        align-items: center;
    }
`
export const LogoLink = styled.a`
    display:block;

    @media (max-width: 768px) {
        img {
            margin-left: 40px;
        }
    }
`
export const infoControll = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`
export const GridArea = styled.div`
    display: flex;
    justify-content: flex-end;
    display: grid;
    flex: 1;

    @media (max-width: 768px) {
        justify-content: center;
        margin: 0 20px;
        width: 100%:
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        max-width: 300px;
        margin: auto;
    }
`;