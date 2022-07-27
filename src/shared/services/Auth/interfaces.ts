import { IBodyAuth, ILoginResponse } from 'src/shared/interfaces';

export interface IAuth{
  login: ({email, password}: IBodyAuth) => Promise<ILoginResponse>
}
