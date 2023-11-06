import "./ourteams.css";
import agent1 from "./images/agent1.png"
import agent2 from "./images/agent2.png"
import agent3 from "./images/agent3.png"
import agent4 from "./images/agent4.png"
function OurTeams() {
  return (
    <div className="ourteams">
      <h1 className="our-h1">Our <span className="team-span">Team</span></h1>
      <p className="our-p">Meet our teammates</p>
      <div className="team-img-cont">
        <div className="team-img-titles">
        <img className="team-img" src={agent3} alt="img" />
        <p className="team-img-p">Sales manager</p>
        </div>
        <div className="team-img-titles">
        <img className="team-img" src={agent4} alt="img" />
        <p className="team-img-p">HR</p>
        </div>
        <div className="team-img-titles">
        <img className="team-img" src={agent2} alt="img" />
        <p className="team-img-p">CEO</p>
        </div>
        <div className="team-img-titles">
        <img className="team-img" src={agent1} alt="img" />
        <p className="team-img-p">Sales manager</p>

        </div>
      </div>
    </div>
  );
}

export default OurTeams;
