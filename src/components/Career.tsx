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
                <h4>Hackathon Winner</h4>
                <h5>National Recognition</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Won a National Hackathon for developing 'Sahyog', an AI-driven disaster relief platform.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Workshop Organizer</h4>
                <h5>IEEE Student Branch</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Organized a multi-day technical workshop on LLMs for 200+ students.
              Contributing to collaborative technical projects and development initiatives as a key team member.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Department Representative</h4>
                <h5>VIT Pune</h5>
              </div>
              <h3>2024</h3>
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
