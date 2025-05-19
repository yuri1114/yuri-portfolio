import React, { useState } from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("보낸 사람:", email);
    console.log("제목:", subject);
    console.log("내용:", message);

    alert("메시지가 전송되었습니다.");

    setEmail("");
    setSubject("");
    setMessage("");
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
        <form onSubmit={handleSubmit}>
          <div className={styles.mb}>
            <input
              type="email"
              required
              placeholder="보내는 사람 이메일을 적어주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.mb}>
            <input
              type="text"
              required
              value={subject}
              placeholder="제목을 적어주세요"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className={styles.mb}>
            <textarea
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="내용 적어주세요"
            ></textarea>
          </div>

          <button type="submit" className={styles.sendBtn}>
            보내기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
