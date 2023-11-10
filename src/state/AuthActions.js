// ユーザー入力に応じたアクションの設定
export const LoginStart = ({user}) => ({
    type: "LOGIN_START", // ログインを開始した行動 typeはアクションの名前
  });
  
  export const LoginSuccess = ({user}) => ({
    type: "LOGIN_SUCCESS", // ログインに成功した行動
    payload: user, // payloadで今のuserの状態を返す
  });
  
  export const LoginError = ({error}) => ({
    type: "LOGIN_ERROR", // ログインに失敗
    payload: error, // エラーを返す
  });
