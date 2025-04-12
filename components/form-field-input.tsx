import * as React from "react";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { CheckIcon, Lightbulb } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Input as InputType } from "@/types/model";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export type FormFieldInputProps = InputType & {
  setIsCorrect: Dispatch<SetStateAction<boolean>>;
};

const FormFieldInput = ({
  setIsCorrect,
  label,
  validResponses,
  description,
  hint,
  responseFormat,
}: FormFieldInputProps) => {
  const formSchema = z.object({
    input: z
      .string()
      .refine(
        (val) =>
          validResponses.includes(val.toLowerCase().trimStart().trimEnd()),
        {
          message:
            "La réponse est incorrecte. Besoin d'aide ? Cliquez sur Indice !",
        }
      ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: "onSubmit",
    mode: "onSubmit",
    defaultValues: { input: "" },
  });

  const onSubmit = () => {
    setIsCorrect(true);
    form.setValue("input", validResponses[0]);
  };

  const isSubmitSuccessful = form.formState.isSubmitSuccessful;

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <div className="flex flex-col md:flex-row gap-2 items-center">
                  <Input
                    autoComplete="off"
                    placeholder={responseFormat ?? "Votre réponse ici"}
                    {...field}
                    disabled={!!isSubmitSuccessful}
                    className={`transition-allduration-300${
                      isSubmitSuccessful
                        ? "border-green-500 text-green-700"
                        : ""
                    }`}
                  />
                  {hint && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          className="bg-amber-300"
                        >
                          <Lightbulb />
                          Indice
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            {hint.title ?? "Besoin d'un coup de pouce ?"}
                          </DialogTitle>
                          <DialogDescription className="space-y-2 flex flex-col gap-4">
                            {hint.description}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  )}
                  {!isSubmitSuccessful ? (
                    <Button type="submit" className="transition-all">
                      Envoyer
                    </Button>
                  ) : (
                    <Button
                      className="bg-green-500 text-white p-2 rounded-full transition-all duration-300"
                      disabled
                    >
                      <CheckIcon className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              </FormControl>
              <FormDescription>{description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default FormFieldInput;
