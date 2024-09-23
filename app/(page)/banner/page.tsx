"use client"
import { CreateBiodata } from "@assets/data/data";
import { BannerColoumn,BannerHeading,BannerInnerWrapper,BannerParagraph,BannerTemplate,BannerWrapper, CreateBioButton } from "@assets/Styles/Banner/style";
import Template1 from '@assets/images/banner/template1.png';
import Template2 from '@assets/images/banner/template2.png';
import Template3 from '@assets/images/banner/template3.png';
import Image from "next/image";
export default function Banner() {
    return (
      <>
      <BannerWrapper>
        <div className="container">
          <BannerInnerWrapper>
          <BannerColoumn>
            <BannerHeading>Create Your Perfect Marriage Biodata Online</BannerHeading>
            <BannerParagraph>Make a Beautiful Biodata in 5 Minutes and get it Instantly on Whatsapp.</BannerParagraph>
            <CreateBioButton href={CreateBiodata.link}>
            {CreateBiodata.label}
            </CreateBioButton>
          </BannerColoumn>
          <BannerColoumn>
            <BannerTemplate>
              <Image src={Template1} alt=""/>
              <Image src={Template2} alt=""/>
              <Image src={Template3} alt=""/>
            </BannerTemplate>
          </BannerColoumn>
          </BannerInnerWrapper>
        </div>
      </BannerWrapper>
      </>
    );
  }
  