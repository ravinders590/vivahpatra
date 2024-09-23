import styled from 'styled-components';
import { Font} from "@assets/data/data";
export const FooterWrapper = styled.div`
    border-top: 1px solid #E5E2DF;
`;
export const FooterLogo = styled.div`
margin-bottom: 16px;
`;
export const AboutParagraphFooter = styled.p`
    margin-bottom: 16px;
    font-family: ${Font.secondary};
`;
export const CreateBioButton = styled.a`

    background-color: #6EFFD9EB;
    padding: 14px 24px;
    border-radius: 45px;
    font-size: 16px;
    font-family: ${Font.secondary};
`;
export const FooterConatinerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;
export const AboutFooter = styled.div`
`;
export const QuickLinks = styled.div`
        display: grid;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    gap: 15px;
    font-family: ${Font.secondary};
`;
export const SupportLinks = styled.div`
 display: grid;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    gap: 15px;
    font-family: ${Font.secondary};
`;
export const ContactLinks = styled.div`
 display: grid;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    gap: 15px;
    font-family: ${Font.secondary};
`;

export const FooterColoumn=styled.div`
    padding: 30px 30px 0 0px;
`;
export const CopyRight=styled.p`
    grid-column-start: 1;
    grid-column-end: 5;
    text-align: center;
    margin-top: 50px;
    font-family: ${Font.secondary};
`;