// src/App.js
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactForm = () => {
  // フォームを参照するためのuseRefを定義
  const form = useRef();

  // フォームが送信されたときに呼び出される関数
  const sendEmail = (e) => {
    e.preventDefault(); // ページのリロードを防ぐ

    // EmailJSのsendFormメソッドを呼び出してメールを送信
    emailjs.sendForm(
      'service_02l84fg',     // EmailJSのサービスID
      'template_2dcb1yu',    // EmailJSのテンプレートID
      form.current, // フォームデータ（useRefで参照）
      '0lb-7I23RaJQUn1YL'         // // EmailJSのPublic Key
    ).then((result) => {
      // メール送信に成功したときの処理
        alert('メッセージは正常に送信されました。');
      }, (error) => {
         // メール送信に失敗したときの処理
        alert('メッセージを送信できませんでした。もう一度お試しください。');
      });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
