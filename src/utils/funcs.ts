import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { TGeneralObj } from "./types";

export const isErrorWithData = (
  error: FetchBaseQueryError | SerializedError,
): error is { status: number; data: { message: string } } =>
  !!error &&
  typeof error === "object" &&
  "status" in error &&
  "data" in error &&
  !!error.data &&
  typeof error.data === "object" &&
  "message" in error?.data &&
  typeof error?.data?.message === "string";

export const getCustomError = (
  error?: FetchBaseQueryError | SerializedError,
): { errStatus?: number; errMessage?: string } => {
  if (!error) return {};
  if (isErrorWithData(error)) {
    const { status, data } = error;
    return { errStatus: status, errMessage: data.message };
  } else {
    return { errMessage: "Something went wrong" };
  }
};

export const getExistingParams: (params: TGeneralObj) => TGeneralObj = (
  params,
) => {
  let existingParams: TGeneralObj = {};
  for (let key in params) {
    if (params[key]) {
      existingParams[key] = params[key];
    }
  }
  return existingParams;
};
