import React, { FormEvent, useContext, useRef, useState } from "react";
import "./Login.css";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null); // useRefはinput属性を監視。
  // console.log(email);
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ログインボタンを押した時に、リロードされないようにする
    if (email.current && password.current) {
      loginCall(
        {
          email: email.current.value,
          password: password.current.value,
        },
        dispatch
      ).then((error) => {
        setErrorMessage(
          "ログインできませんでした。メールアドレスかパスワードが間違っています。"
        );
      });
    }
  };

  const handleRegister = () => {
    window.location.replace("/register");
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // 入力フィールドのバリデーション
  //   if (email === "") {
  //     setError("Eメールを入力してください。");
  //     return;
  //   }
  //   if (password === "") {
  //     setError("パスワードを入力してください。");
  //     return;
  //   }
  //   if (password.length < 5) {
  //     setError("パスワードは5文字以上で入力してください。");
  //     return;
  //   }
  // };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Verse</h3>
          <span className="loginDesc">
            Explore your world, connect with others, with Social Verse.
          </span>
        </div>
        <div className="loginRight">
          {/* <form onSubmit={handleSubmit}> */}
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちら</p>
            <input
              type="email"
              className="loginInput"
              placeholder="Eメール"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength={5}
              ref={password}
            />
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton" onClick={handleRegister}>
              アカウント作成
            </button>
          </form>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          {/* 左側の式がfalsy（false, null, undefined, 0, 空の文字列など）である場合、その式を返し、それ以外の場合は右側の式を返す。 */}
        </div>
      </div>
    </div>
  );
}
