import { METADATA_KEYS } from "../utils/types";
import { setMetadata } from "./metadata";

export const ZeController = (path: string): ClassDecorator =>
  setMetadata(METADATA_KEYS.method_metadata_key, path);
export const ZeInjectTable = (): ClassDecorator => {
  return (target: any) => {};
};
export const ZeInject = (): ClassDecorator => {
  return (target: any) => {};
};
