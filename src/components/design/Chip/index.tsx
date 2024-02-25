import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const chipTv = tv({
  base: "border py-1 px-2 font-primary text-xs rounded-full",
  variants: {
    color: {
      blue: "bg-sky-300 border-sky-600 text-sky-600",
      rose: "bg-rose-300 border-rose-600 text-rose-600",
    },
  },
  defaultVariants: {},
});

export type ChipVariantProps = VariantProps<typeof chipTv>;

export type ChipProps = ChipVariantProps & ComponentProps<"span"> & {};

export default function Chip({ color, children }: ChipProps) {
  return <span className={chipTv({ color })}>{children}</span>;
}
