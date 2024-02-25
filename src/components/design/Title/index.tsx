import { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";
import GenericElement from "@/components/design/core/GenericElement";

const titleTV = tv({
  base: "font-bold",
  variants: {
    color: {
      primary: "text-dark-heading dark:text-light-heading",
      gradient: "bg-clip-text bg-gradient text-transparent",
      "text-gradient": "text-gradient",
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

export type TitleProps<T extends keyof JSX.IntrinsicElements> = ComponentProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> &
  VariantProps<typeof titleTV> & {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    children: ReactNode;
    elementProps?: JSX.IntrinsicElements[T];
    testId?: string;
  };

export default function Title<T extends keyof JSX.IntrinsicElements>({
  tag,
  children,
  elementProps,
  size,
  color,
  testId,
}: TitleProps<T>) {
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
