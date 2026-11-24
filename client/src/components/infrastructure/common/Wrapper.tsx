import React from "react";

import { WrapperProps } from "../../../types/index.types";

function Wrapper({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export default React.memo(Wrapper);
