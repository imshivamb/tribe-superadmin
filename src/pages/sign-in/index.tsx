import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TSignInResponse, useSignInMutation } from "~/redux/api/auth";
import { TSignInBody } from "~/redux/api/auth";
import { useAppDispatch } from "~/redux/hooks";
import { handleIsAuth } from "~/redux/slices/auth.slice";
import CustomButton from "~/ui/shared/custom-button";
import CustomController from "~/ui/shared/form/controllers";
import CustomInput from "~/ui/shared/form/inputs/custom-input";
import PasswordInput from "~/ui/shared/form/inputs/password-input";
import InfoBox from "~/ui/shared/info-box";

import { getCustomError } from "../../utils/funcs";
import CustomCard from "./components/custom-card";
import { styles } from "./styles";
import { SignInSchema } from "./utils";

const SignIn: React.FC = () => {
  const [isAdminErr, setIsAdminErr] = useState(false);
  const form = useForm({ resolver: yupResolver(SignInSchema) });
  const { handleSubmit } = form;

  const [signInMutation, { isLoading, error }] = useSignInMutation();

  const { errMessage } = getCustomError(error);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (data: TSignInBody) => {
    setIsAdminErr(false);
    signInMutation(data)
      .unwrap()
      .then((res: TSignInResponse) => {
        if (res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
          dispatch(handleIsAuth(true));
          navigate("/users");
        }
      });
  };

  return (
    <Box sx={styles.container}>
      <CustomCard title="Sign in to Admin Dashboard">
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomController
              label="Email"
              name="email"
              placeholder="Enter your email"
              RenderComponent={CustomInput}
            />
            <CustomController
              label="Password"
              name="password"
              placeholder="Enter your password"
              RenderComponent={PasswordInput}
            />
            {errMessage && <InfoBox message={errMessage} />}
            {isAdminErr && (
              <InfoBox message="You don't have access to Admin Dashboard" />
            )}
            <CustomButton
              label="Sign In To Admin Dashboard"
              type="submit"
              fullWidth
              isLoading={isLoading}
              additionalSx={{ marginTop: "20px" }}
            />
          </form>
        </FormProvider>
      </CustomCard>
    </Box>
  );
};

export default SignIn;
