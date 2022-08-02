export interface IResponseRegister {
  user:  IRegisterUser;
  token: IRegisterToken;
}

export interface IRegisterToken {
  type:       string;
  token:      string;
  expires_at: Date;
}

export interface IRegisterUser {
  email:      string;
  name:       string;
  created_at: Date;
  updated_at: Date;
  id:         number;
}

export interface IBodyRegister {
  email: string
  password: string
  name: string
}

export interface IRegister{
  register: (body: IBodyRegister) => Promise<IResponseRegister>
}
