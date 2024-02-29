"use client";
import { useQueryString } from "../hooks";
import { remove } from "lodash";
import { QueryStringType } from "./QueryString";

export default function QSRouter({ routes }: { routes: QueryStringType[] }) {
  const { qs, unset } = useQueryString();
  if (!routes) {
    return null;
  }
  const matchRoute = (route: QueryStringType) =>
    route.match.filter((params) => qs.get(params.field) === params.value)
      ?.length > 0 || false;
  const foundMatch: QueryStringType = routes.find(
    matchRoute
  ) as QueryStringType;

  const undoQueryString = () => {
    const allKeys = [
      ...foundMatch.match.map((item) => item.field),
      ...(foundMatch.props || []),
    ];
    const filterFixedProps = remove(allKeys, (match) => {
      return match !== foundMatch.fixedProps;
    });

    if (filterFixedProps.length > 0) {
      unset(filterFixedProps);
    } else {
      unset(allKeys);
    }
  };
  const Component = foundMatch?.component;
  return (
    (Component && (
      <Component
        matched="true"
        criteria={foundMatch.match}
        undoQueryString={undoQueryString}
        {...foundMatch?.props?.reduce?.(
          (acc, prop) => ({
            ...acc,
            [prop]: qs.get(prop) ? qs.get(prop) : undefined,
          }),
          {}
        )}
      />
    )) ||
    null
  );
}
