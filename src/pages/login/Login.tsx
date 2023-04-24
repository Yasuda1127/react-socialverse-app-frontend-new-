import React, { FormEvent, useRef, useState } from "react";
import "./Login.css";

export default function Login() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null); // useRefはinput属性を監視。
  console.log(email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // ログインボタンを押した時に、リロードされないようにする
    if (email.current) {
      console.log(email.current.value)
    }
    if (password.current) {
      console.log(password.current.value)
    }
  }

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
          <span className="loginDesc">本格的なSNSを、自分の手で。</span>
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
            <button className="loginRegisterButton">アカウント作成</button>
          </form>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
