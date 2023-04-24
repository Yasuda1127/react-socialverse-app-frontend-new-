// ユーザー入力に応じたアクションの設定
export const LoginStart = ({user}:any) => ({
    type: "LOGIN_START", // ログインを開始した行動 typeはアクションの名前
  });
  
  export const LoginSuccess = ({user}:any) => ({
    type: "LOGIN_SUCCESS", // ログインに成功した行動
    payload: user, // payloadで今のuserの状態を返す
  });
  
  export const LoginError = ({error}:any) => ({
    type: "LOGIN_ERROR", // ログインを
    payload: error,
  });
