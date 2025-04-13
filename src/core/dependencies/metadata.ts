import { METADATA_KEYS } from "../utils/types";

export const setMetadata = (
  key: METADATA_KEYS,
  value: any
): MethodDecorator & ClassDecorator & ParameterDecorator => {
  return (
    target: any,
    propertyKey?: string | symbol,
    descriptorOrIndex?: PropertyDescriptor | number
  ) => {
    if (propertyKey && typeof descriptorOrIndex === "number") {
      // This is a parameter decorator
      if (!target[propertyKey].paramMetadata) {
        target[propertyKey].paramMetadata = [];
      }
      target[propertyKey].paramMetadata[descriptorOrIndex] = {
        key,
        value,
      };
    } else if (!propertyKey && typeof descriptorOrIndex === "number") {
      if (!target.paramMetadata) {
        target.paramMetadata = [];
      }
      target.paramMetadata[descriptorOrIndex] = {
        key,
        value,
      };
    } else if (propertyKey && descriptorOrIndex) {
      //This is a method decorator
      const descriptor = descriptorOrIndex as PropertyDescriptor;
      if (!descriptor.value.metadata) {
        descriptor.value.metadata = [];
      }
      descriptor.value.metadata[key] = value;
    } else {
      //This is a class decorator
      if (!target.metadata) {
        target.metadata = [];
      }
      target.metadata[key] = value;
    }
  };
};

export const getMetadata = (key: METADATA_KEYS, target: any) => {
  return target.metadata[key];
};
