type Constructor<T> = new (...args: any[]) => T;
class ContainerApp {
  services = new Map<any, Constructor<any>>();
  register = new Map<string, any>();
}
