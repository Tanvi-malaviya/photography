import AfterYouSend from "../../../components/contact/AfterYouSend";
import ContactDetails from "../../../components/contact/ContactDetails";
import ContactHero from "../../../components/contact/ContactHero";
import PersonalNote from "../../../components/contact/PersonalNote";
import PremiumContactForm from "../../../components/contact/PremiumContactForm";
import WhatHappensNext from "../../../components/contact/WhatHappensNext";





export default function Contact() {
  return (
    <>
  
  <ContactHero />
  <PremiumContactForm />
  <WhatHappensNext />
  <PersonalNote />
  <AfterYouSend />
 
  <ContactDetails />
  
    </>
  );
}
