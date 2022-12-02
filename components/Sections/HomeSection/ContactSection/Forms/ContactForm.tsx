import { ButtonIcon, MyButton } from "components/Button/button.style";
import { Input } from "components/Inputs/basic.input.styled";
import { TextArea } from "components/Inputs/textarea.styled";
import React from "react";
import { ContactFormGroup } from "./contact.form";

const ContactForm = () => {
  return (
    <ContactFormGroup>
      <Input id="name" placeholder="Name" type="text" dark={true} />
      <Input id="email" placeholder="e-mail" type="email" dark={true} />
      <TextArea id="message" placeholder="message" dark={true} rows={4}/>
      <MyButton>
        Submit <ButtonIcon />
      </MyButton>
    </ContactFormGroup>
  );
};

export default ContactForm;
