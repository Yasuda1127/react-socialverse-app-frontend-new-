import React, { ReactNode, createContext, useReducer } from "react"; // グローバルコンテキストを作り出すことができる
import AuthReducer from "./AuthReducer";

// stateの初期値の状態

// type AuthContextType = {
//   user: null | any;
//   isFetching: boolean;
//   error: boolean;
//   dispatch?: React.DispatchWithoutAction;
// }

type User = {
  _id: string;
  username: string;
  email: string;
  password:string;
  coverPicture:string;
  profilePicture?: string;
  followers: [];
  followings:[];
  isAdmin?: boolean;
  createdAt?: string;
};

type AuthState = {
  user: User | null;
  isFetching: boolean;
  error: boolean;
  dispatch?: React.DispatchWithoutAction;
};

// 最初のユーザー状態を定義
const initialState: AuthState = {
  // user: null,
  user: {
    _id: "6423f550e9ad87b7f9dd600d",
    username: "Fujiwara",
    email: "motoo@gmail.com",
    password: "123456",
    profilePicture: "/person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
  dispatch: () => undefined,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  // 認証をどこでも提供する
  const [state, dispatch] = useReducer(AuthReducer, initialState); // stateに似ている
  return (
    // アプリケーション全体で使えるようにする
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch, // actionの通知
      }}
    >
      {children}
      {/* ↑ index.jsのAppに相当する */}
    </AuthContext.Provider>
  );
};
