import styles from "./TextWrap.module.scss";

const TextWrap = () => {
  return (
    <div className={styles.textWrap}>
      <p>
        안녕하세요 <br /> 프론트엔드 개발자 장유리 입니다 <br /> HI, I’M JANG
        YURI. <br /> I’M A FRONT-END DEVELOPER
      </p>

      <p>
         저는 입버릇처럼 말합니다. <br /> “내가 안 해봐서 서툰 건 있어도,
        <br />
        익숙해지면 뭐든 잘하는 편이야.”
      </p>

      <p>"#야무진", "#실행력", "#밝은에너지"</p>
    </div>
  );
};

export default TextWrap;
