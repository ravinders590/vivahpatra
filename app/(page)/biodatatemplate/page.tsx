"use client"
import { BiodataHeader, BiodataHeading, BiodataInnerWrapper, BiodataParagraph, BiodataWrapper } from "@assets/Styles/BiodataTemplate/style";
import Image from "next/image";
import bg from '@assets/images/bg.png';
import { Font,CreateBiodata, Colors} from "@assets/data/data";
export default function BiodataTemplate() {
    return (
      <>
      <BiodataWrapper style={{
      backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
        backgroundColor: `${Colors.lightRed1}`,
        borderRadius: '0 50px'
      }}
      >
        <div className="container">
        <BiodataInnerWrapper>
          <BiodataHeader>
          <BiodataHeading>
            Beautifully Handcrafted Marriage Biodata Template
          </BiodataHeading>
          <BiodataParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ante turpis, porta in sem luctus, facilisis volutpat nulla. Suspendisse luctus consequat ligula id varius. Nullam sit amet arcu metus. Aliquam tristique sapien ligula, posuere pulvinar quam aliquet quis.
          </BiodataParagraph>
          </BiodataHeader>
          </BiodataInnerWrapper>
        </div>
        
      </BiodataWrapper>
      </>
    );
  }
  