export const ReactComponent;

declare module "*svg" {
  const content: string | svg;
  // const content: any;
  declare module "libName";
  const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
}
