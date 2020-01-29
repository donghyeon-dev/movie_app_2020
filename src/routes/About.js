import React from "react";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>"나는 뭐라고 써야할지 모르겠지만 일단 써본다"</span>;
      <span>박동현, 1994</span>
    </div>
  );
}

export default About;
