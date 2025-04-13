export type Constructor<T> = new (...args: any) => T;
export enum HTTP_METHOD {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH",
}
export enum METADATA_KEYS {
  method_metadata_key = "method-metadata-key",
}
