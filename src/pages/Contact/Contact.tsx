import React, { useRef, useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("메시지가 성공적으로 전송되었습니다.");
          formRef.current?.reset();
        },
        (error) => {
          console.error("전송 실패:", error);
          alert("전송 중 오류가 발생했습니다.");
        }
      )
      .finally(() => setIsSending(false));
  };
  return (
    <div className={styles.flexPage}>
      <div className="left">
        <p className={styles.title}>CONTACT</p>
        <p className={styles.info}>Tel : 010-7770-0310</p>
        <p className={styles.info}>Email : jyuri1114@naver.com</p>
      </div>

      <div className={styles.emailContainer}>
        <p className={styles.subtitle}>Send email </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.mb}>
            <input
              type="email"
              required
              placeholder="보내는 사람 이메일을 적어주세요"
              name="user_email"
            />
          </div>

          <div className={styles.mb}>
            <input
              type="text"
              required
              name="title"
              placeholder="제목을 적어주세요"
            />
          </div>

          <div className={styles.mb}>
            <textarea
              required
              rows={10}
              name="message"
              placeholder="내용을 적어주세요"
            ></textarea>
          </div>

          <button type="submit" className={styles.sendBtn}>
            {isSending ? "전송 중..." : "보내기"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
