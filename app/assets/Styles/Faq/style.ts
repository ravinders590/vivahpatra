import styled from 'styled-components';
import { Font,CreateBiodata, Colors} from "@assets/data/data";

export const FaqColoumn = styled.div`
`;
export const FaqWrapper = styled.div`
padding: 60px 0;
text-align: center;
`;
export const FaqInnerWrapper = styled.div`
`;
export const FaqHeading = styled.h2`
font-size: 40px;
margin-bottom: 24px;
`;
export const FaqAccordion = styled.div`
    width: 80%;
    margin: 0 auto 10px;
    background-color: ${Colors.primary};
    cursor: pointer;
`;
export const FaqAccordionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${Colors.white};
    padding: 25px;
    
`;
export const FaqAccordionTitle = styled.h3`
font-family: ${Font.primary};
font-size: 18px;
`;
export const FaqAccordionNumber = styled.span`
    display: inline-block;
    border-radius: 50%;
    margin-right: 5px;
`;
export const FaqAccordionContent = styled.div`
text-align: left;
color: ${Colors.white};
background-color: ${Colors.primary};
color: ${Colors.white};
border-top: 1px solid ${Colors.white};
padding: 25px;
`;