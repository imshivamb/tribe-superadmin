import { format } from "date-fns";

export const dateTimeFormatter = (inputDate: string) => {
  const parsedDate = new Date(inputDate);
  const formattedDate = format(parsedDate, "MMM d, yyyy 'at' h:mmaaa");
  return formattedDate;
};

export const getQueryParams = (
  page: string | null,
  size: string | null,
  search: string | null,
) => {
  const params: any = {};

  if (page !== null) params.page = page;
  if (size !== null) params.size = size;
  if (search !== null) params.search = search;

  return params;
};
