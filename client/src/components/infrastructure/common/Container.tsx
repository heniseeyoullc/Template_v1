import React from "react";

// @ts-ignore: Stylesheet modules are handled by the bundler.
import "../../../assets/styles/sass/components/infrastructure/common/Container.sass";

import { ContainerProps } from "../../../types/index.types";

function Container({ children, className }: ContainerProps) {
  return <section className={className}>{children}</section>;
}

export default React.memo(Container);
