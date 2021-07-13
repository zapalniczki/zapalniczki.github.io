import React from "react";
import { ReactNode } from "react";
import { UseQueryResult } from "react-query";

type Props<T> = {
  children: (data: T) => ReactNode;
  query: UseQueryResult<T>;
};

function QueryLoader<T>({ children, query }: Props<T>) {
  if (query.isFetching) {
    return <p style={{ border: "2px solid red" }}>loading...</p>;
  } else if (query.isSuccess) {
    return <>{children(query.data as T)}</>;
  } else {
    return <p>ERROR</p>;
  }
}

export default QueryLoader;
