import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const chipTv = tv({
  base: "border py-1 px-2 font-primary text-xs rounded-full font-semibold",
  variants: {
    color: {
      slate: "bg-slate-100 border-slate-600 text-slate-600",
      gray: "bg-gray-100 border-gray-600 text-gray-600",
      zinc: "bg-zinc-100 border-zinc-600 text-zinc-600",
      neutral: "bg-neutral-100 border-neutral-600 text-neutral-600",
      stone: "bg-stone-100 border-stone-600 text-stone-600",
      red: "bg-red-100 border-red-600 text-red-600",
      orange: "bg-orange-100 border-orange-600 text-orange-600",
      amber: "bg-amber-100 border-amber-600 text-amber-600",
      yellow: "bg-yellow-100 border-yellow-600 text-yellow-600",
      green: "bg-green-100 border-green-600 text-green-600",
      emerald: "bg-emerald-100 border-emerald-600 text-emerald-600",
      lime: "bg-lime-100 border-lime-600 text-lime-600",
      teal: "bg-teal-100 border-teal-600 text-teal-600",
      sky: "bg-sky-100 border-sky-600 text-sky-600",
      blue: "bg-blue-100 border-blue-600 text-blue-600",
      cyan: "bg-cyan-100 border-cyan-600 text-cyan-600",
      indigo: "bg-indigo-100 border-indigo-600 text-indigo-600",
      violet: "bg-violet-100 border-violet-600 text-violet-600",
      purple: "bg-purple-100 border-purple-600 text-purple-600",
      fuchsia: "bg-fuchsia-100 border-fuchsia-600 text-fuchsia-600",
      pink: "bg-pink-100 border-pink-600 text-pink-600",
      rose: "bg-rose-100 border-rose-600 text-rose-600",
    },
  },
  defaultVariants: {},
});

export type ChipVariantProps = VariantProps<typeof chipTv>;

export type ChipProps = ChipVariantProps & ComponentProps<"span"> & {};

export default function Chip({ color, children }: ChipProps) {
  return <span className={chipTv({ color })}>{children}</span>;
}
