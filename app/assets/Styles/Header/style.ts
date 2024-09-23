import styled from 'styled-components';
import { Font} from "@assets/data/data";
export const HeaderWrapper = styled.div`
    border-bottom: 1px solid #E5E2DF;
`;
export const HeaderConatiner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 0;
`;
export const MainLogo = styled.div`
width: 150px;
`;
export const MainNav = styled.div`
ul{
    display: grid;
    grid-template-columns: repeat(5, auto);
    text-align: center;
    gap: 23px;
    font-size: 22px;
    font-family: ${Font.secondary};
}
`;
export const CreateBioButton = styled.a`

    background-color: #6EFFD9EB;
    padding: 14px 24px;
    border-radius: 45px;
    font-size: 16px;
    font-family: ${Font.secondary};
`;