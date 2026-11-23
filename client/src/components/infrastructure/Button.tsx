import React from "react";

// @ts-expect-error: Stylesheet modules are handled by the bundler.
import "@/assets/style/sass/components/infrastructure/Button.sass";
import { ButtonProps } from "@/types/index.types";

function Button({ className, children }: ButtonProps) {
  return <button className={className}>{children}</button>;
}

export default React.memo(Button);
