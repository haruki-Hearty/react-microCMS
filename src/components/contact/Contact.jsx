import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { Container } from "../../components/container/Container";
import styles from "./Contact.module.scss";

export const Contact = () => {
  // フォームを参照するためのuseRefを定義
  const form = useRef();
  // エラーはまとめない
  const [error, setError] = useState({});

  const [formValue, setFormValue] = useState({
    userName: "",
    furigana: "",
    email: "",
    confirmEmail: "",
  });

  //バリデーション関数
  const validate = () => {
    if (!formValue.userName) {
      setError((prev) => ({
        ...prev,
        userName: "お名前を入力してください",
      }));
    }

    if (!formValue.furigana) {
      setError((prev) => ({
        ...prev,
        furigana: "フリガナを入力してください",
      }));
    }

    if (!formValue.email) {
      setError((prev) => ({
        ...prev,
        email: "メールアドレスを入力してください",
      }));
    }

    if (!formValue.textarea) {
      setError((prev) => ({
        ...prev,
        textarea: "お問い合わせ内容を入力してください",
      }));
    }

    if (formValue.email !== formValue.confirmEmail) {
      setError((prev) => ({
        ...prev,
        confirmEmail: "メールアドレスが一致しません",
      }));
    }
  };

  // フォームが送信されたときに呼び出される関数
  const sendEmail = (e) => {
    e.preventDefault(); // ページのリロードを防ぐ
    if (!validate()) {
      return;
    } // バリデーション関数validate()の結果をチェック
    setError({});
    setFormValue({})
    // EmailJSのsendFormメソッドを呼び出してメールを送信
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
                onChange={(e) =>
                  setFormValue((prev) => ({
                    ...prev,
                    userName: e.target.value,
                  }))
                }
              />
              {error.userName && (
                <p className={styles.error}>{error.userName}</p>
              )}
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
                onChange={(e) =>
                  setFormValue((prev) => ({
                    ...prev,
                    furigana: e.target.value,
                  }))
                }
              />
              {error.furigana && (
                <p className={styles.error}>{error.furigana}</p>
              )}
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
              />
              {error.email && (
                <p className={styles.error}>{error.email}</p>
              )}
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
              />
              {error.confirmEmail && (
                <p className={styles.error}>{error.confirmEmail}</p>
              )}
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
                onChange={(e) =>
                  setFormValue((prev) => ({
                    ...prev,
                    textarea: e.target.value,
                  }))
                }
              />
              {error.textarea && (
                <p className={styles.error}>{error.textarea}</p>
              )}
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
