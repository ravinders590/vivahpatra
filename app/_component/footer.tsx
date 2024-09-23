"use client";
import Image from "next/image";
import Logo from "@assets/images/vivahpatra.png";
import { AboutFooter, AboutParagraphFooter, CreateBioButton, FooterColoumn,FooterWrapper,FooterConatinerWrapper, FooterLogo, QuickLinks, SupportLinks, ContactLinks, CopyRight } from "@assets/Styles/Footer/style";
import { Menu, CreateBiodata,SupportLink} from "@assets/data/data";
import Link from "next/link";

export default function Footer() {
    return (
      <>
      <FooterWrapper>
        <div className="container">
        <FooterConatinerWrapper>
        <FooterColoumn>
          <AboutFooter>
            <FooterLogo><Image src={Logo} alt="Logo" width={100} height={100} /></FooterLogo>
            <AboutParagraphFooter>Welcome to our online matrimonial biodata maker! We are a team of dedicated professionals with a passion for making the process of creating a biodata simple, easy, and enjoyable.</AboutParagraphFooter>
            <CreateBioButton href={CreateBiodata.link}>
            {CreateBiodata.label}
            </CreateBioButton>
          </AboutFooter>
        </FooterColoumn>
        <FooterColoumn>
          <QuickLinks>
          <h2 className="text-center">Quick Links</h2>
          {
            Menu.map((item, index) => {
              return (
                <li key={index}><Link href={item.link}>{item.label}</Link></li>
              )
            })
          }
          </QuickLinks>
        </FooterColoumn>
        <FooterColoumn>
        <SupportLinks>
        <h2 className="text-center">Support Links</h2>
          {
            SupportLink.map((item, index) => {
              return (
                <li key={index}><Link href={item.link}>{item.label}</Link></li>
              )
            })
          }
        </SupportLinks>
        </FooterColoumn>
        <FooterColoumn>
          <ContactLinks>
          <h2 className="text-left">Reach Us</h2>
          <Link href={'mail:contact@vivahpatra.com'}>contact@vivahpatra.com</Link>
          </ContactLinks>
        </FooterColoumn>
        <CopyRight>
        Copyright ©2024 vivahpatra. All Rights Reserved
        </CopyRight>
        </FooterConatinerWrapper>
        </div>
      
      </FooterWrapper>
      </>
    );
}