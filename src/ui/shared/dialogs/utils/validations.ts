import * as yup from "yup";

const message = "This is a required field";

export const autoEnrichSchema = yup.object({
  savedSearch: yup.string().required(message),
  contactsPerDay: yup.number().required(message),
  ignoreContactsInOtherLists: yup.boolean().required(message),
});
