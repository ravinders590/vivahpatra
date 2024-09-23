"use client"
import { FaqAccordion, FaqAccordionContent, FaqAccordionHeader, FaqAccordionNumber, FaqAccordionTitle, FaqHeading, FaqInnerWrapper, FaqWrapper } from "@/app/assets/Styles/Faq/style";
import {Faq} from "@assets/data/data";
import { useState } from "react";

export default function Banner() {
  const [selected, setSelected] = useState(null);
  const accordienHandle = (accordion_items:any)=>{
    if (selected === accordion_items) {
      setSelected(null);
    } else {
      setSelected(accordion_items);
    }
    
  }
    return (
      <>
      <FaqWrapper>
        <div className="container">
          <FaqInnerWrapper>
            <FaqHeading>Frequently Asked Questions</FaqHeading>
            {Faq.map((item,index)=>{
              const i=index + 1
              return <>
              <FaqAccordion key={i}>
              <FaqAccordionHeader onClick={() => accordienHandle(i)} className={`${selected === i ? 'open' : ''}`}>
               <FaqAccordionTitle><FaqAccordionNumber>{i}</FaqAccordionNumber>{item.question}</FaqAccordionTitle> 
               {selected === i ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> 
                }
              </FaqAccordionHeader>
              {selected === i && <FaqAccordionContent>{item.answer}</FaqAccordionContent>}
              
            </FaqAccordion>
              </>
              
            })}
            
          </FaqInnerWrapper>
        </div>
      </FaqWrapper>
      </>
    );
  }
  