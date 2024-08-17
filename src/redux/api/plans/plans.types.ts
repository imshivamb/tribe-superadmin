export type TPlan = {
  id: number;
  name: string;
  recurring: string;
  trialDays: number;
  type: string;
  data: {
    maxProjectsAmount: number;
  };
  externalProductId: number;
  amount: number;
  hidden: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type TGetPlanResponse = {
  data: TPlan[];
};

export type TEditPlanBody = {
  productId: number;
  userId: string;
};

export type TEditPlanStatusBody = {
  userId: string;
  productId: number;
  status: string;
};
