import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
const Person = ({ img, personName, job, children }) => {
  const url = `https://randomuser.me/api/portraits/med/women/${img}.jpg`;
  return (
    <article className='person'>
      <img src={url} alt='person image'></img>
      <h3 className='name'>{personName}</h3>
      <h5>{job}</h5>
      {children}
    </article>
  );
};
const PersonList = () => {
  return (
    <section className='personList'>
      <Person img='34' personName='Angela' job='Designer'></Person>
      <Person img='51' personName='Sailey' job='Developer'></Person>
      <Person img='32' personName='Emma' job='Doctor'>
        <p>
          Hey Everyone Emma this side, I reques everyone of you to stay inside
          and keep your Families Safe from Covid.
        </p>
      </Person>
      <Person img='14' personName='Brittny' job='Artist'></Person>
      <Person img='21' personName='Taylor' job='Singer'></Person>
      <Person img='11' personName='Cardi' job='Dancer'></Person>
      <Person img='16' personName='Kyle' job='Model'></Person>
      <Person img='71' personName='Augastha' job='Actor'></Person>
      <Person img='54' personName='Anthana' job='Entreprenuer'></Person>
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
