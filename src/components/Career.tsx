import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aletrix</h4>
                <h5>App &amp; Model Developer</h5>
              </div>
            </div>
            <p>
              Working as the App Developer and main Model Developer at Aletrix, a startup providing advanced AR (Augmented Reality) services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bandhavgarh Safari</h4>
                <h5>App Project Intern</h5>
              </div>
            </div>
            <p>
              Worked on the development of their roster booking app and backend development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IEEE VIT Pune Student Branch</h4>
                <h5>Secretary</h5>
              </div>
            </div>
            <p>
              Currently serving as the Secretary for the IEEE Student Branch at VIT Pune, managing internal communications, organizing major technical events, and coordinating executive committee operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Department Representative</h4>
                <h5>VIT Pune</h5>
              </div>
            </div>
            <p>
              Elected as Department Representative, leading and coordinating 1000+ students
              in inter-departmental competitions and university events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
