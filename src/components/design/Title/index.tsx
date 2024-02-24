import { ReactNode } from "react";
import { tv } from "tailwind-variants";
import GenericElement from "@/components/design/core/GenericElement";

interface TextProps<T extends keyof JSX.IntrinsicElements> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: ReactNode;
  elementProps?: JSX.IntrinsicElements[T];
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | "gradient";
  testId?: string;
}

export default function Title<T extends keyof JSX.IntrinsicElements>({
  tag,
  children,
  elementProps,
  size,
  color,
  testId,
}: TextProps<T>) {
  const titleTV = tv({
    base: "text-dark-heading dark:text-light-heading font-bold",
    variants: {
      color: {
        primary: "text-dark-heading dark:text-light-heading",
        gradient: "bg-clip-text bg-gradient text-transparent",
      },
      size: {
        h1: "text-5xl",
        h2: "text-4xl",
        h3: "text-3xl",
        h4: "text-2xl",
        h5: "text-1xl",
        h6: "text-xl",
      },
    },
    defaultVariants: {
      size: "h1",
      color: "primary",
    },
  });

  return (
    <GenericElement
      tag={tag}
      className={titleTV({ size, color })}
      elementProps={elementProps}
      testId={testId}
    >
      {children}
    </GenericElement>
  );
}
