export type TDefRoute = {
  title?: string;
  path: string;
  element: React.FC;
  layout?: "default" | "auth";
};

export type TRoute = TDefRoute & {
  withHeader?: boolean;
  withSidebar?: boolean;
};
