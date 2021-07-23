import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  makeRedirectUri,
  ResponseType,
  useAuthRequest,
} from "expo-auth-session";

import { User } from "../@types";

const { CLIENT_SECRET } = process.env;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => void;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: String(CLIENT_ID),
      scopes: ["read:user"],
      redirectUri: makeRedirectUri({
        scheme: REDIRECT_URI,
      }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      console.log(response);
      //getToken(code);
      setLoading(false);
    }
  }, [response]);

  async function getToken(code: string) {
    await api
      .post(
        `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => setLoading(false));
  }

  function signIn() {
    setLoading(true);
    promptAsync();
  }

  function signOut() {}
  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
