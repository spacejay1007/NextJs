import "./page.scss";

const AboutPage = () => {
  return (
    <div className="about__page__wrapper">
      <div className="my__profile__wrap">
        <h1>Who am I?</h1>
        <div>개발을 사랑하는 프론트 엔드 개발자</div>
        <div>사람과 디자인을 담는 웹,앱을 만들고 있음</div>
      </div>
      <div className="my__career__wrpper">
        <h1>Career</h1>
        <div>에스에스알(-2022.02)</div>
      </div>
      <div className="my__skill__wrapper">
        <h1>Skills</h1>
        <div>
          JavaScript, TypeScript, React, NextJS, ReactQuery, ReactHookForm,
          Redux
        </div>
        <div>NodeJS, Express, MySQL</div>
        <div>Git</div>
      </div>
    </div>
  );
};

export default AboutPage;
