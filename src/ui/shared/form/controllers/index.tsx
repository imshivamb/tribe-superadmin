import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: React.ReactNode;
  defaultValue?: string | number | boolean;
  RenderComponent: React.FC<any>;
  [x: string]: any;
};

const CustomController: React.FC<Props> = ({
  name,
  label,
  defaultValue = "",
  RenderComponent,
  ...childProps
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={
        defaultValue ||
        // childProps?.options?.[0]?.value ||
        (typeof defaultValue === "boolean" ? false : "") ||
        ""
      }
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const props = {
          value,
          onChange,
          label,
          error,
          name,
          checked: !!value,
        };
        return <RenderComponent {...props} {...childProps} />;
      }}
    />
  );
};

export default CustomController;
