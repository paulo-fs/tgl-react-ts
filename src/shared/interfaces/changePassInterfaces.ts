export interface IChangePass{
  changePassword: (body: IChangePassBody) => Promise<IChangePassResponse>
}

export interface IChangePassBody {
  password: IChangePassPass
  token: string
}

export interface IChangePassPass {
  email: string
  password: string
}

export interface IChangePassResponse {
  id:         number;
  email:      string;
  is_admin:   number;
  name:       string;
  created_at: Date;
  updated_at: Date;
}
