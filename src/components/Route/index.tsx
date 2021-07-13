import React, { ReactElement } from "react";
import { Route as RouterRoute } from "react-router";

type Props = {
  children: ReactElement;
  path: string;
  exact?: boolean;
};

const Route = (props: Props) => {
  return <RouterRoute {...props} />;
};

export default Route;
