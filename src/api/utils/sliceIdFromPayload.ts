function sliceIdFromPayload<T>(payload: T) {
  // @ts-ignore
  const { _i, ...rest } = payload;

  return rest;
}

export default sliceIdFromPayload;
