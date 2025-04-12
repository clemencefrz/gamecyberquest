type Hint = {
  title?: string;
  description: React.ReactNode;
};

export type Input = {
  label: string;
  shortLabel: string;
  validResponses: string[];
  responseFormat?: string;
  description?: string;
  hint?: Hint;
};

type CommonPage = {
  title: string;
  description: React.ReactNode;
};

export type GamePage = CommonPage & {
  inputs: Array<Input>;
};

export type FirstPage = CommonPage;

export type EndPage = CommonPage;

export type Steps = [FirstPage, ...GamePage[], EndPage];
