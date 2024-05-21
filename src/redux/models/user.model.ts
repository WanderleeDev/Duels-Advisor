export interface IUserComplementaryData {

}

export interface IUserState {
  name: string | null;
  token: string | null;
  email: string | null;
  password: string | null;
  complementary: IUserComplementaryData | null;
}