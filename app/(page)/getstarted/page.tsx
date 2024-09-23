"use client"
import { CreateBiodata } from "@assets/data/data";
import { GetStartedColoumn, GetStartedHeading, GetStartedInnerWrapper, GetStartedNumber, GetStartedParagraph, GetStartedSubHeading, GetStartedWrapper,CreateBioButton } from "@assets/Styles/GetStarted/style";
import Image from "next/image";
export default function GetStarted() {
    return (
      <>
      <GetStartedWrapper>
        <div className="container">
        <GetStartedHeading>
        How to get started!!
        </GetStartedHeading>
        <GetStartedInnerWrapper>
          <GetStartedColoumn>
            <GetStartedNumber>01</GetStartedNumber>
            <GetStartedSubHeading>
              Add Your Details
            </GetStartedSubHeading>
            <GetStartedParagraph>Enter all your Personal, Professional and Family details that you want to show on the Biodata.</GetStartedParagraph>
          </GetStartedColoumn>
          <GetStartedColoumn>
            <GetStartedNumber>02</GetStartedNumber>
            <GetStartedSubHeading>
              Add Your Details
            </GetStartedSubHeading>
            <GetStartedParagraph>Enter all your Personal, Professional and Family details that you want to show on the Biodata.</GetStartedParagraph>
          </GetStartedColoumn>
          <GetStartedColoumn>
            <GetStartedNumber>03</GetStartedNumber>
            <GetStartedSubHeading>
              Add Your Details
            </GetStartedSubHeading>
            <GetStartedParagraph>Enter all your Personal, Professional and Family details that you want to show on the Biodata.</GetStartedParagraph>
          </GetStartedColoumn>
        </GetStartedInnerWrapper>
        <CreateBioButton href={CreateBiodata.link}>
            {CreateBiodata.label}
            </CreateBioButton>
        </div>
      
      </GetStartedWrapper>
      </>
    );
  }
  