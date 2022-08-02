export interface IResetPassResponse {
  id:               number;
  email:            string;
  is_admin:         number;
  name:             string;
  token:            string;
  token_created_at: Date;
  created_at:       Date;
  updated_at:       Date;
}

export interface IBodyResetPass {
  email: string
}

export interface IResetPass{
  resetPass: (email: IBodyResetPass) => Promise<IResetPassResponse>
}
