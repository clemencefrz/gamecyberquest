"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom doit avoir au moins 2 caractères",
  }),
});

type Props = {
  goToNextStep: () => void;
};

export function StartCard({ goToNextStep }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const now = new Date();
    window.localStorage.setItem("userName", data.username);
    window.localStorage.setItem("startTime", now.toISOString());
    goToNextStep();
  }

  return (
    <Card className="w-full max-w-5xl">
      <CardHeader>
        <CardTitle>{`Bienvenue !`}</CardTitle>
        <CardDescription className="sm:py-3 flex flex-col gap-4">
          <span>{`Le site internet de "Tisse Ta Toile" a été piraté.`}</span>
          <span>
            Votre mission : <strong>trouver le hacker</strong>.
          </span>
          <span>
            Fouillez internet pour retrouver les infos personnelles de cet
            individu.
          </span>
          <span>
            {`C'est ce qu'on appelle`}{" "}
            <a
              href="https://www.cnil.fr/fr/recoupement-dinformations-en-ligne-ce-que-vous-publiez-peut-devoiler-votre-vie-privee"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-primary transition-colors"
            >{`l'OSINT…`}</a>
            {". "}
          </span>
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{`Nom de l'équipe`}</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom d'équipe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full mt-5" type="submit">
              Commencer le jeu
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
