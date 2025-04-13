import { Constructor } from "../utils/types";

export default class ContainerDI {
  private static services = new Map<any, Constructor<any>>();
  private static register = new Map<string, any>();

  //Register a services constructor into the container
  static registerServices<T>(constructor: Constructor<any>) {
    ContainerDI.services.set(constructor.name, constructor);
  }

  // Retries an instance of the request service
  static getServices<T>(constructor: Constructor<any>) {
    // Get the constructor from registerd serveces map
    const service = ContainerDI.services.get(constructor.name);
    if (!service) throw Error(`${constructor.name} not found`);
    //Return the existing instance if already registered
    if (ContainerDI.register.has(service.name)) {
      return ContainerDI.register.get(service.name);
    }
    //Resolve constructor dependencies using metadata
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
