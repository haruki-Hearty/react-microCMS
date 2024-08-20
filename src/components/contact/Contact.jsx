import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { Container } from "../../components/container/Container";
import styles from "./Contact.module.scss";

export const Contact = () => {
  // フォームを参照するためのuseRefを定義
  const form = useRef();
  // エラーはまとめない
  const [error, setError] = useState("");
  // バリデーション
  const [formValue, setFormValue] = useState({
    userName: "",
    furigana: "",
    email: "",
    confirmEmail: "",
  });

  // フォームが送信されたときに呼び出される関数
  const sendEmail = (e) => {
    e.preventDefault(); // ページのリロードを防ぐ

    if (formValue.email !== formValue.confirmEmail) {
      setError("メールアドレスが一致しません。ご確認ください。");
      return;
    }

    setError("");

    // EmailJSのsendFormメソッドを呼び出してメールを送信
    // .envに追加
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // EmailJSのサービスID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // EmailJSのテンプレートID
        form.current, // フォームデータ（useRefで参照）
        process.env.REACT_APP_EMAILJS_PUBLILC_KEY // // EmailJSのPublic Key
      )
      .then(
        (result) => {
          // メール送信に成功したときの処理
          alert("メッセージは正常に送信されました。");
        },
        (error) => {
          // メール送信に失敗したときの処理
          alert("メッセージを送信できませんでした。もう一度お試しください。");
        }
      );
  };

  return (
    <Container>
      <div className={styles.inner}>
        <SectionTitle japanese="お問い合わせ" english="CONTACT" />
        <form ref={form} onSubmit={sendEmail}>
          <dl className={styles.items}>
            <dt className={styles.label}>
              <label htmlFor="user_name">お名前</label>
              <span className={styles.required}>必須</span>
            </dt>
            <dd className={styles.input}>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="お名前を入力してください"
                required
              />
            </dd>

            <dt className={styles.label}>
              <label htmlFor="user_furigana">フリガナ</label>
              <span className={styles.required}>必須</span>
            </dt>
            <dd className={styles.input}>
              <input
                id="user_furigana"
                type="text"
                name="user_furigana"
                placeholder="フリガナを入力してください"
                required
              />
            </dd>

            <dt className={styles.label}>
              <label htmlFor="user_email">メールアドレス</label>
              <span className={styles.required}>必須</span>
            </dt>
            <dd className={styles.input}>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="メールアドレスを入力してください"
                value={formValue.email}
                onChange={(e) =>
                  setFormValue((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </dd>

            <dt className={styles.label}>
              <label htmlFor="user_confirmEmail">メールアドレス(確認用)</label>
              <span className={styles.required}>必須</span>
            </dt>
            <dd className={styles.input}>
              <input
                id="user_confirmEmail"
                type="email"
                name="user_confirmEmail"
                placeholder="メールアドレスを入力してください"
                value={formValue.confirmEmail}
                onChange={(e) =>
                  setFormValue((prev) => ({
                    ...prev,
                    confirmEmail: e.target.value,
                  }))
                }
                required
              />
              {error && <p className={styles.error}>{error}</p>}
            </dd>

            <dt className={styles.label}>
              <label htmlFor="message">お問い合わせ内容</label>
              <span className={styles.required}>必須</span>
            </dt>
            <dd className={styles.input}>
              <textarea
                id="message"
                name="message"
                placeholder="お問い合わせ内容を入力してください"
                rows="5"
                required
              />
            </dd>
          </dl>

          <button className={styles.button} type="submit">
            送信
          </button>
        </form>
      </div>
    </Container>
  );
};
