import { ReactNode } from "react";
import GenericElement from "../GenericElement";

interface TextProps<T extends keyof JSX.IntrinsicElements> {
  className?: string;
  children: ReactNode;
  elementProps?: JSX.IntrinsicElements[T];
}

export default function TextText<T extends keyof JSX.IntrinsicElements>({
  children,
  className,
  elementProps,
}: TextProps<T>) {
  return (
    <GenericElement tag="p" className={className} elementProps={elementProps}>
      {children}
    </GenericElement>
  );
}
