import React from "react";

// @ts-ignore: Stylesheet modules are handled by the bundler.
import "../../assets/style/sass/components/infrastructure/common/Progress.sass";

import { ProgressProps } from "../../../types/index.types";

function Progress({ className }: ProgressProps) {
  return <div>{/* Progress component goes here */}</div>;
}

export default React.memo(Progress);
