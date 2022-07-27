export interface IBodyAuth {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user:  User;
  token: Token;
}

export interface IAuth{
  login: ({email, password}: IBodyAuth) => Promise<ILoginResponse>
}


interface Token {
  type:       string;
  token:      string;
  expires_at: Date;
}

interface User {
  id:               number;
  email:            string;
  is_admin:         number;
  name:             string;
  token:            null;
  token_created_at: null;
  created_at:       Date;
  updated_at:       Date;
  picture:          null;
}
