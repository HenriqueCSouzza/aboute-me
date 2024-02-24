import { createElement, FC, ReactNode } from "react";

interface GenericElementProps<T extends keyof JSX.IntrinsicElements> {
  tag: T;
  className?: string;
  children: ReactNode;
  elementProps?: JSX.IntrinsicElements[T];
  testId?: string;
}

const GenericElement: FC<GenericElementProps<keyof JSX.IntrinsicElements>> = ({
  tag,
  className,
  children,
  elementProps,
  testId,
}) => {
  return createElement(
    tag,
    { className, "data-testid": testId, ...elementProps },
    children
  );
};

export default GenericElement;
