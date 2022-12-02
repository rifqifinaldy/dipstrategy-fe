import { Input } from "components/Inputs/basic.input.styled";
import { Small } from "components/Text/Paragraph";
import React from "react";

const FooterForm = () => {
  return (
    <form>
      <Input
        dark={false}
        placeholder="Sign in to our NewsLetter"
        type="email"
      />
      <Small align="left">
        This site is protected by reCAPTHCHA and the <u>Google Privacy
        Policy</u> and <u>Terms of Services apply</u>
      </Small>
    </form>
  );
};

export default FooterForm;
