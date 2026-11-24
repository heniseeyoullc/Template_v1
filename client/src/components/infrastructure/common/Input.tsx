import React from "react";

// @ts-ignore: Stylesheet modules are handled by the bundler.
import "../../assets/style/sass/components/infrastructure/common/Input.sass";

import { InputProps } from "../../../types/index.types";

function Input({ className }: InputProps) {
  return <input className={className} />;
}

export default React.memo(Input);
