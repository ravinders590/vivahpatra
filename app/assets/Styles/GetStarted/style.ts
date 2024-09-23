import styled from 'styled-components';
import { Font,CreateBiodata,Colors} from "@assets/data/data";

export const GetStartedColoumn = styled.div`
padding: 30px;
position: relative;
&:first-child span:before{
    width:60%;
    right: 0;
    left: auto;
}
&:last-child span:before{
    width:60%;
    left: 0;
    right: auto;
}
`;
export const GetStartedWrapper = styled.div`
    padding: 60px 0;
    text-align: center;
`;
export const GetStartedInnerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;
export const GetStartedHeading = styled.h2`
font-size: 40px;
margin-bottom: 16px;
`;
export const GetStartedNumber = styled.span`
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 16px;
    width: 30%;
    display: inline-block;
    background-color: ${Colors.white};
    color: ${Colors.gray};
    &:before {
    content: '';
    position: absolute;
    border: 2px dashed ${Colors.textColor};
    width: 100%;
    margin: 0;
    right: 0;
    left: 0;
    top: 60px;
    z-index: -1;
}

`
export const GetStartedSubHeading = styled.h3`
margin-bottom: 8px;
`;
export const GetStartedParagraph = styled.p`
font-size: 14px;
`;
export const CreateBioButton = styled.a`

    background-color: #6EFFD9EB;
    padding: 14px 24px;
    border-radius: 6px;
    font-size: 16px;
    font-family: ${Font.secondary};
    text-transform: uppercase;
    grid-column-start:1 ;
    grid-column-end:4;
    display: inline-block;
    margin: 40px auto 0;
`;