import { Constructor } from "./utils/types";

export default class ContainerDI {
  private static services = new Map<any, Constructor<any>>();
  private static register = new Map<string, any>();

  static registerServices<T>(constructor: Constructor<any>) {
    ContainerDI.services.set(constructor.name, constructor);
  }

  static getServices<T>(constructor: Constructor<any>) {
    const service = ContainerDI.services.get(constructor.name);
    if (!service) throw Error(`${constructor.name} not found`);

    if (ContainerDI.register.has(service.name)) {
      return ContainerDI.register.get(service.name);
    }

    const paramTypes = Reflect.getMetadata("design:paramtypes", service) ?? [];
    const dependencies = paramTypes.map((params: any) => {
      ContainerDI.registerServices(params);
      return ContainerDI.getServices(params);
    });
    const instance = new service(...dependencies);
    ContainerDI.register.set(service.name, instance);
    return instance;
  }
}
