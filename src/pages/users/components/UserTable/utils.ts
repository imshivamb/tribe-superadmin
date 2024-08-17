import { PurchaseStatus } from "~/redux/api/users";

export const columns = [
  { id: 1, label: "Name", columnName: "name" },
  { id: 2, label: "Email", columnName: "email" },
  { id: 3, label: "Created At", columnName: "createdAt" },
  { id: 4, label: "Plan", columnName: "plan" },
  { id: 5, label: "Plan Status", columnName: "planStatus" },
  { id: 6, label: "", columnName: "userAction" },
];

export const getStatus = (status: PurchaseStatus) =>
  status.split("_").join(" ");

export function findLatestActive(data: any) {
  const empty = { name: null, status: null };

  if (!data) return empty;

  const sortedData = [...data].sort(
    (a: any, b: any) =>
      new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime(),
  );

  for (const item of sortedData) {
    if (item.isActive) {
      return { name: item.name, status: item.status };
    }
  }

  return empty;
}
