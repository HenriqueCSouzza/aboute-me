import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";
import GenericElement from "@/components/design/core/GenericElement";

const textTV = tv({
  base: "",
  variants: {
    color: {
      primary: "text-dark-heading dark:text-light-heading",
      gradient: "bg-clip-text bg-gradient text-transparent",
      contrast: "dark:text-dark-heading text-light-content",
      textContent: "text-content",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    size: "base",
    color: "textContent",
  },
});

export type TextProps<T extends keyof JSX.IntrinsicElements> =
  ComponentProps<"p"> &
    VariantProps<typeof textTV> & {
      className?: string;
      children: ReactNode;
      elementProps?: JSX.IntrinsicElements[T];
      testId?: string;
    };

export default function Text<T extends keyof JSX.IntrinsicElements>({
  children,
  className,
  elementProps,
  testId,
  size,
  color,
}: TextProps<T>) {
  return (
    <GenericElement
      tag="p"
      className={textTV({ size, color, className })}
      elementProps={elementProps}
      testId={testId}
    >
      {children}
    </GenericElement>
  );
}
