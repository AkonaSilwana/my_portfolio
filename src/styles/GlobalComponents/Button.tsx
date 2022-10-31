import React from "react";

import { ButtonBack, ButtonFront } from "./index";

const Button = (props: any) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
      href="mailto:asliwana30@gmail.com?subject=Reaching Out To Work With You"
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
