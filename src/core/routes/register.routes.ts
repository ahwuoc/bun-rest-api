import Elysia, { Context } from "elysia";
import { METADATA_KEYS } from "../utils/types";
import { getMetadata } from "../dependencies/metadata";
import { combinePath } from "../utils/common";

export default function registerRouter(instance: any) {
  const router = new Elysia();

  const controllerPath = getMetadata(
    METADATA_KEYS.method_metadata_key,
    instance.constructor
  );

  if (!controllerPath) {
    throw new Error(`Missing @Controller() on ${instance.constructor.name}`);
  }

  const methods = Object.getOwnPropertyNames(
    Object.getPrototypeOf(instance)
  ).filter((method) => method !== "constructor");

  for (const methodName of methods) {
    const methodMetadata = getMetadata(
      METADATA_KEYS.method_metadata_key,
      instance[methodName]
    );
    if (!methodMetadata) continue;
    const pathFull = combinePath(controllerPath, methodMetadata.path);
    const methodFull = methodMetadata.method.toLowerCase();

    if (typeof (router as any)[methodFull] !== "function") {
      console.warn(`Unsupported method: ${methodFull}`);
      continue;
    }

    (router as any)[methodFull](pathFull, (ctx: Context) => {
      return instance[methodName](ctx);
    });
  }
  return router;
}
