import { Grid } from "@mui/material";
import { CSSProperties } from "react";
import CustomButton from "~/ui/shared/custom-button";

type Props = {
  cancelBtnLabel?: string;
  submitBtnLabel?: string;
  canSubmit?: boolean;
  canCancel?: boolean;
  handleCancel: () => void;
  isLoading?: boolean;
  additionalSx?: CSSProperties;
};

const styles = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
};

const ActionButtons: React.FC<Props> = ({
  cancelBtnLabel = "Cancel",
  submitBtnLabel = "Save",
  canSubmit = true,
  canCancel = true,
  handleCancel,
  isLoading = false,
  additionalSx = {},
}) => {
  return (
    <Grid sx={{ ...styles, ...additionalSx }}>
      <CustomButton
        disabled={!canCancel}
        label={cancelBtnLabel}
        handleClick={handleCancel}
        outlined
      />
      <CustomButton
        disabled={!canSubmit}
        label={submitBtnLabel}
        type="submit"
        additionalSx={{ minWidth: "90px" }}
        isLoading={isLoading}
      />
    </Grid>
  );
};

export default ActionButtons;
