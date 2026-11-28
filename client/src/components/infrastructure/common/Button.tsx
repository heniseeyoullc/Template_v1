import React from "react";

// @ts-ignore: Stylesheet modules are handled by the bundler.
import "../../../assets/styles/sass/components/infrastructure/common/Button.sass";

import { ButtonProps } from "../../../types/index.types";

function Button({ className, children }: ButtonProps) {
  return (
    <button className={className}>{children ? children : "Button"}</button>
  );
}

export default React.memo(Button);
