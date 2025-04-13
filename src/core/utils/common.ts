export function combinePath(...args: string[]) {
  return (
    "/" +
    args
      .filter((path) => path !== "")
      .map((path) => path.replace(/^\/|\/$/g, "")) // bỏ slash đầu/cuối
      .join("/")
  );
}
