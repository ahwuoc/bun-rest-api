import { HTTP_METHOD, METADATA_KEYS } from "../utils/types";
import { setMetadata } from "./metadata";

export const ZeGET = (path = ""): MethodDecorator =>
  setMetadata(METADATA_KEYS.method_metadata_key, {
    method: HTTP_METHOD.GET,
    path,
  });
export const ZePOST = (path = ""): MethodDecorator =>
  setMetadata(METADATA_KEYS.method_metadata_key, {
    method: HTTP_METHOD.POST,
    path,
  });

export const ZeDELETE = (path = ""): MethodDecorator =>
  setMetadata(METADATA_KEYS.method_metadata_key, {
    method: HTTP_METHOD.DELETE,
    path,
  });

export const ZePATCH = (path = ""): MethodDecorator =>
  setMetadata(METADATA_KEYS.method_metadata_key, {
    method: HTTP_METHOD.PATCH,
    path,
  });
