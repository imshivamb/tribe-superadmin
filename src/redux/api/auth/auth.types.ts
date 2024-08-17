export type TSignInResponse = {
  data: {
    id: string;
    accessToken: string;
    email: string;
    name: string;
  };
};

export type TSignInBody = {
  email: string;
  password: string;
};
