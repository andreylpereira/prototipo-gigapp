import React, {createContext, useState} from 'react';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: Boolean;
  token: String; //retiravel
  usuario: object;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}) => {
  const [usuario, setUsuario] = useState<object>({});

  async function signIn() {
    const response = await auth.signIn();
    const {token, usuario} = response;

    console.log(response);
    setUsuario(response.usuario);
  }
  return (
    <AuthContext.Provider
      value={{signed: !!usuario, token: '', usuario, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
