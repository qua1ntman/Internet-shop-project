export interface IRegister {
  firstName: string,
  secondName: string,
  email: string,
  phone: string,
  password: string,
  repeatPassword?: string
}

export interface ILogin {
  email: string,
  password: string,
}


type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

export type TRegister = CreateMutable<IRegister>;

export type TLogin = CreateMutable<ILogin>;