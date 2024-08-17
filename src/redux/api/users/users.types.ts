import { TMeta } from "~/redux/types";

export enum PurchaseStatus {
  Active = "active",
  Canceled = "canceled",
  PendingCancellation = "pending_cancellation",
  Inactive = "inactive",
}

export type TBillingPlan = {
  amount: number;
  createdAt: string;
  data: { maxProjectsAmount: number };
  externalProductId: number;
  hidden: boolean;
  id: number;
  name: string;
  order: number;
  recurring: string;
  trialDays: number;
  type: string;
  updatedAt: string;
};

export type TPurchase = {
  billingPlan: TBillingPlan;
  status: PurchaseStatus;
  id: number;
};

export type TUser = {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  imageUrl: null;
  createdAt: string;
  updatedAt: string;
  role: null;
  Purchase: TPurchase[];
  UserSubscriptions: any;
};

export type TGetUsersResponse = {
  data: {
    meta: TMeta;
    items: TUser[];
  };
};

export type TGetUsersParams = {
  page: string;
  size: string;
  search: string;
};
