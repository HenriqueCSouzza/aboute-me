"use client";
import { Url } from "next/dist/shared/lib/router/router";
import {
  usePathname,
  useSearchParams,
  useRouter,
  useParams,
} from "next/navigation";

export default function useQueryString() {
  const search = useSearchParams();
  const pathname = usePathname();
  const { push, replace } = useRouter();
  const qs = new URLSearchParams(search);

  const set = (fields: { [x: string]: string }) => {
    Object.keys(fields).forEach((field) => qs.set(field, fields[field]));
    return push(qs.toString());
  };

  const getLink = (fields: { [x: string]: string }) => {
    Object.keys(fields).forEach((field) =>
      fields[field] ? qs.set(field, fields[field]) : qs.delete(field)
    );
    return `?${qs.toString()}`;
  };

  const unset = (fields: any[]) => {
    fields.forEach((element) => {
      delete query[element];
    });
    return push({ query }, undefined, { shallow: true });
  };

  const hydratedPush = (otherQuery: {}) => {
    push(
      {
        query: { ...query, ...otherQuery },
      },
      undefined,
      { shallow: true }
    );
  };

  const pushShallow = (url: Url) => {
    push(url, undefined, { shallow: true });
  };

  return {
    qs,
    set,
    getLink,
    unset,
    nextPush: push,
    push: hydratedPush,
    pushShallow,
    replace,
    pathname,
    search,
    query,
    pushRouter: push,
  };
}
