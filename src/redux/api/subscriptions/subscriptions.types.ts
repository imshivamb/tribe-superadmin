enum PaymentRecurringEnum {
  DAILY,
  WEEKLY,
  MONTHLY,
  YEARLY,
}

enum ProductTypeEnum {
  PHYSICAL,
  DIGITAL,
  SERVICE,
}

interface BillingPlan {
  id: number;
  name: string;
  recurring: PaymentRecurringEnum;
  trialDays: number;
  type: ProductTypeEnum;
  data: any | null;
  externalProductId: number;
  amount: number;
  hidden?: boolean;
  createdAt?: Date;
  updatedAt?: Date | null;
}

export interface TGetUserSubscription {
  id: number;
  name: string;
  userId: string;
  isActive?: boolean;
  purchaseId: number;
  billingPlanId: number;
  status: any;
  isCurrent: boolean;
  activeUntil?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  billingPlan: BillingPlan;
}

export type TGetSubscriptionResponse = {
  data: TGetUserSubscription[];
};

export type TGetSubscriptionBody = {
  userId: string;
};

export type TEditSubscriptionBody = {
  isActive: boolean;
  subscriptionId: number;
  userId: string;
};


export type TEditSubPlanBody = {
  billingPlanId: number;
  userId: string;
};
