import { ReactNode, createContext, useReducer } from "react"; // グローバルコンテキストを作り出すことができる
import AuthReducer from "./AuthReducer";


// stateの初期値の状態

type AuthContextType = {
  user: null | any;
  isFetching: boolean;
  error: boolean;
  dispatch?: React.DispatchWithoutAction;
}

// 最初のユーザー状態を定義
const initialState = {
  user: null,
  isFetching: false,
  error: false,
}

// 状態をグローバルに管理する
export const AuthContext = createContext<AuthContextType>(initialState);

export const AuthContextProvider = ({ children }:{children: ReactNode}) => {
  // 認証をどこでも提供する
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return ( // アプリケーション全体で使えるようにする
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
