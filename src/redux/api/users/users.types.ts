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


// export type TGhostUser = {
//   id: string;
//   name: string;
//   slug: string;
//   email: string;
//   profile_image: string | null;
//   cover_image: string | null;
//   bio: string | null;
//   website: string | null;
//   location: string | null;
//   facebook: string | null;
//   twitter: string | null;
//   created_at: string;
//   updated_at: string;
//   visibility: 'public' | 'private';
//   status: 'active' | 'inactive' | 'locked';
//   // Add any other fields that Ghost returns
// };