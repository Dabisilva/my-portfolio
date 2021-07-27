import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
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
import { COLLECTION_TOKEN, COLLECTION_USER } from "../config/storage";

type AuthContextData = {
  user: User;
  token: string;
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
  const [token, setToken] = useState("");

  async function loadStorage() {
    setLoading(true);
    const getUserToken = await AsyncStorage.getItem(COLLECTION_TOKEN);
    const getStorageUser = await AsyncStorage.getItem(COLLECTION_USER);

    const userData = JSON.parse(String(getStorageUser));
    const userToken = JSON.parse(String(getUserToken));

    if (userData && userToken) {
      api.defaults.headers["Authorization"] = `Bearer ${userToken}`;
      setUser(userData);
      setToken(userToken);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadStorage();
  }, []);

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

  function checkResponseType() {
    if (response?.type === "success" && !token) {
      const { code } = response.params;
      getToken(code);
    }
  }

  useEffect(() => {
    checkResponseType();
  }, [response]);

  async function getToken(code: string) {
    await api
      .post(
        `github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`
      )
      .then((response) => {
        const userToken = response.data
          .split("&scope=read%3Auser&token_type=bearer")[0]
          .split("access_token=")[1];

        setToken(userToken);
        api.defaults.headers.authorization = `Bearer ${userToken}`;

        AsyncStorage.setItem(COLLECTION_TOKEN, JSON.stringify(userToken));

        getUser();
      })
      .catch((error) => {
        Alert.alert("Erro", "Não foi possivel realizar o login");
        setLoading(false);
      });
  }

  async function getUser() {
    await api
      .get("api.github.com/user")
      .then((response) => {
        AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(response.data));
        setUser(response.data);
      })
      .catch((error) => {
        Alert.alert("Erro", "Não foi possivel realizar o login");
      })
      .finally(() => setLoading(false));
  }

  function signIn() {
    setLoading(true);
    promptAsync();
  }

  function signOut() {
    setUser({} as User);
    setToken("");
    AsyncStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
