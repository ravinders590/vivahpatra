import styled from 'styled-components';
import { Font,CreateBiodata} from "@assets/data/data";

export const BannerColoumn = styled.div`
position: relative;
`;
export const BannerWrapper = styled.div`
    padding: 60px 0 80px;
`;
export const BannerHeading = styled.h1`
margin-bottom: 24px;
`;
export const BannerParagraph = styled.p`
margin-bottom: 24px;
`;
export const BannerInnerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,40% 60%);
`;
export const CreateBioButton = styled.a`

    background-color: #6EFFD9EB;
    padding: 14px 24px;
    border-radius: 6px;
    font-size: 16px;
    font-family: ${Font.secondary};
    text-transform: uppercase;
`;
export const BannerTemplate = styled.div`
min-height: 400px;
img:first-child,
:nth-child(2),
:last-child{
    position: absolute;
    transform: rotate(-7deg);
}
img:nth-child(2) {
    right: 0;
    left: 0;
    margin: auto;
    transform: rotate(0);
    top: -12px;
}
img:last-child {
    transform: rotate(7deg);
    right: 30px;
    z-index: -1;
}
img:first-child {
    right: 0px;
    left: 30px;
}
`;

