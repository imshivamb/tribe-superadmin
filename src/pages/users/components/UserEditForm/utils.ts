import { TPlan } from "~/redux/api/plans";

export class PlansAdapter {
  static modify(plans: null | TPlan[]) {
    return plans?.map((plan: TPlan) => ({
      label: plan.name,
      value: plan.id,
    }));
  }
}
