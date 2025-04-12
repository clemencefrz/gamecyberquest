import { Input } from "@/types/model";
import FormFieldInput from "./form-field-input";

type Props = {
  inputs: Input[];
  handleValidationChange: (index: number, correct: boolean) => void;
};
const FormFieldInputs = ({ inputs, handleValidationChange }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      {inputs.map((input, index) => (
        <FormFieldInput
          key={index}
          setIsCorrect={() => handleValidationChange(index, true)}
          {...input}
        />
      ))}
    </div>
  );
};

export default FormFieldInputs;
