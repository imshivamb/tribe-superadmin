export type TDialogProps = {
  open: boolean;
  handleClose: () => void;
  isEdit?: boolean;
};

export type TFormField = {
  name: string;
};

export type TAutoEnrichSubmitData = {
  savedSearch: string;
  contactsPerDay: number;
  ignoreContactsInOtherLists: boolean;
};
