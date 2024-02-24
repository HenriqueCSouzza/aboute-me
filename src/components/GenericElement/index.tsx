import { createElement, FC, ReactNode } from "react";

interface GenericElementProps<T extends keyof JSX.IntrinsicElements> {
  tag: T;
  className?: string;
  children: ReactNode;
  elementProps?: JSX.IntrinsicElements[T];
}

const GenericElement: FC<GenericElementProps<keyof JSX.IntrinsicElements>> = ({
  tag,
  className,
  children,
  elementProps,
}) => {
  return createElement(tag, { className, ...elementProps }, children);
};

export default GenericElement;
