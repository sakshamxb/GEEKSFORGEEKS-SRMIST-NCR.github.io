import styles from "styles/Home/Team.module.css";
import Card from "./Card";
import { data } from "/lib/MemberApi";

const Team = () => {
  let leadCard = data.leadList.map((lead) => {
    return <Card key={lead.id} data={lead} />;
  });

  data.facultyList.map((faculty) => {
    return <Card key={faculty.id} data={faculty} />;
  });

  return (
    <section id="Team">
      <div>
        <h2 className="section-title">Chapter Lead</h2>
        <div className={styles.container}>
          {<Card key={data.chapterLead[0].id} data={data.chapterLead[0]} />}
        </div>
        <h2 className="section-title">Team Leads</h2>
        <div className={styles.container}>{leadCard}</div>
      </div>
    </section>
  );
};

export default Team;
