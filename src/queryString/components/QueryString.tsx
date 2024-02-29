"use client";
import QueryStringRouter from "./QueryStringRouter";
import WorkDialog from "../dialogs/WorkDialog";

export type QueryStringType = {
  component: (props: any) => JSX.Element;
  match: {
    field: string;
    value: string;
  }[];
  props: string[];
  fixedProps?: string;
};
export default function QueryString() {
  const enchantedRoutes: QueryStringType[] = [
    {
      component: WorkDialog,
      match: [{ field: "dialog", value: "work" }],
      props: ["id"],
    },
  ];
  return <QueryStringRouter routes={enchantedRoutes} />;
}
