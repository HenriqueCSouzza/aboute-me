import { ReactNode } from "react";
import GenericElement from "@/components/design/core/GenericElement";

interface TextProps<T extends keyof JSX.IntrinsicElements> {
  className?: string;
  children: ReactNode;
  elementProps?: JSX.IntrinsicElements[T];
  testId?: string;
}

export default function Text<T extends keyof JSX.IntrinsicElements>({
  children,
  className,
  elementProps,
  testId,
}: TextProps<T>) {
  return (
    <GenericElement
      tag="p"
      className={className}
      elementProps={elementProps}
      testId={testId}
    >
      {children}
    </GenericElement>
  );
}
