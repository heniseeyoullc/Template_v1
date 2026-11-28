import React from "react";

// @ts-ignore: Stylesheet modules are handled by the bundler.
import "../../../assets/styles/sass/components/infrastructure/common/Wrapper.sass";

import { WrapperProps } from "../../../types/index.types";

function Wrapper({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export default React.memo(Wrapper);
