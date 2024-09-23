"use client";
import Image from "next/image";
import Logo from "@assets/images/vivahpatra.png";
import { CreateBioButton, HeaderConatiner, HeaderWrapper,MainLogo,MainNav } from "@assets/Styles/Header/style";
import Link from 'next/link';
import { Menu, CreateBiodata} from "@assets/data/data";
export default function Header() {
    return (
      <>
      <HeaderWrapper>
       <div className="container">
        <HeaderConatiner>
          <MainLogo>
            <Image src={Logo} alt="Logo" />
          </MainLogo>
          <MainNav>
            <ul>
              {
                Menu.map((item:any,index:number)=>{
                  return <><li key={index}><Link href={item.link}>{item.label}</Link></li></>
                })
              }
            </ul>
          </MainNav>
          <CreateBioButton href={CreateBiodata.link}>
          {CreateBiodata.label}
          </CreateBioButton>
        </HeaderConatiner>
        </div> 
      </HeaderWrapper>
      </>
    );
}