import "./styles/ResumeModal.css";
import { TbX, TbDownload } from "react-icons/tb";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Actions */}
        <div className="resume-modal-header">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download-btn"
          >
            <TbDownload />
            Download PDF
          </a>
          <button className="resume-close-btn" onClick={onClose}>
            <TbX />
          </button>
        </div>

        {/* Resume Content */}
        <div className="resume-modal-content">
          <header className="resume-header">
            <h1>Dhruv Karanwal</h1>
            <p className="resume-tagline">AI/ML Developer &amp; Software Engineer</p>
            <div className="resume-contact-info">
              <span>9068069118</span>
              <span>•</span>
              <a href="mailto:dhruvkaranwal123@gmail.com">dhruvkaranwal123@gmail.com</a>
              <span>•</span>
              <span>Pune, Maharashtra</span>
            </div>
            <div className="resume-social-links">
              <a href="https://www.linkedin.com/in/dhruv-karanwal" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/dhruvkaranwal" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </header>

          <hr className="resume-divider" />

          {/* Summary */}
          <section className="resume-section">
            <h2>Summary</h2>
            <p className="resume-summary-text">
              Third-year B.Tech Computer Science and Engineering (Artificial Intelligence) student at Vishwakarma Institute of Technology, Pune (CGPA: 8.84) with hands-on experience in AI/ML, mobile application development, and AR/VR solutions. Passionate about building real-world products at the intersection of AI, software engineering, and immersive technologies. Experienced in leading technical initiatives as Joint Secretary of IEEE VIT Pune and driven to develop scalable solutions that create meaningful impact.
            </p>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2>Education</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Vishwakarma Institute of Technology</h3>
                <span className="resume-date">2024 - 2028</span>
              </div>
              <p className="resume-item-sub">B.Tech in Computer Science and Engineering (Artificial Intelligence)</p>
              <p className="resume-item-detail">CGPA: 8.84 | Pune, Maharashtra</p>
            </div>
          </section>

          {/* Work Experience */}
          <section className="resume-section">
            <h2>Work Experience</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>App Developer &amp; Model Developer</h3>
                <span className="resume-date">May 2026 - Present</span>
              </div>
              <p className="resume-item-sub">Aletrix (AR Solutions for Businesses)</p>
              <ul className="resume-list">
                <li>Co-founded Aletrix, a startup developing customized Augmented Reality (AR) solutions for businesses.</li>
                <li>Leading AR application development, product architecture, and backend integration while converting client requirements into scalable solutions.</li>
                <li>Contributing to product planning and technical strategy to build immersive business applications.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h3>App Developer Intern</h3>
                <span className="resume-date">Dec 2025 - May 2026</span>
              </div>
              <p className="resume-item-sub">Bandhavgarh Tiger Reserve | Pune</p>
              <ul className="resume-list">
                <li>Developed a Flutter-based booking platform used for visitor registration and reservation management.</li>
                <li>Integrated Firebase for real-time synchronization and efficient booking workflows.</li>
                <li>Designed and implemented automated slot allocation and FCFS reservation mechanisms.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h2>Projects</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>AI-Powered Pre-Delinquency Intervention Engine</h3>
                <span className="resume-date">Feb 2026 - Mar 2026</span>
              </div>
              <ul className="resume-list">
                <li>Predicted loan default probability 2-4 weeks in advance by analyzing 30+ behavioral signals including salary shifts, credit utilization, and spending volatility using rolling 7/14/30-day trend windows.</li>
                <li>Built a Risk Fusion Engine combining Gradient Boosting and XGBoost outputs to generate a unified Financial Stress Index and classify customers into Low, Medium, High, and Critical risk tiers.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Sahyog – AI Disaster Relief Platform</h3>
                <span className="resume-date">Nov 2025 - May 2026</span>
              </div>
              <ul className="resume-list">
                <li>Built a tri-app disaster response system with AI-based SOS prioritization using risk severity, population density, and resource availability.</li>
                <li>Integrated Google Liquid Galaxy for immersive geospatial visualization of disaster zones with custom KML overlays.</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="resume-section">
            <h2>Skills</h2>
            <div className="resume-skills-grid">
              <div className="resume-skill-cat">
                <strong>Languages:</strong> C++, Python, SQL, Dart
              </div>
              <div className="resume-skill-cat">
                <strong>Frameworks &amp; Libraries:</strong> FAISS, XGBoost, Sentence Transformers, OpenCV, Flutter, Flask, LangChain
              </div>
              <div className="resume-skill-cat">
                <strong>Developer Tools:</strong> Git, GitHub, Firebase, Google Colab, Jupyter Notebooks
              </div>
              <div className="resume-skill-cat">
                <strong>Databases:</strong> MySQL, Firebase Firestore
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="resume-section">
            <h2>Achievements</h2>
            <ul className="resume-list">
              <li><strong>National Hackathon Winner</strong> for developing Sahyog, an AI-powered multi-disaster relief and response platform integrated with Google Liquid Galaxy.</li>
              <li><strong>Patent Published:</strong> "Gen-AI Powered Healthcare Assistant for Chronic Disease Prediction and Medical Support", Intellectual Property India, 2026 (Application No: 202521113739).</li>
              <li><strong>IEEE APP Project Team Member</strong>, contributed to Flutter and Firebase-based application development through hands-on technical projects.</li>
              <li>Organized a multi-day technical workshop on Large Language Models (LLMs) for 200+ students.</li>
            </ul>
          </section>

          {/* Leadership */}
          <section className="resume-section">
            <h2>Leadership &amp; Positions</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Joint Secretary</h3>
                <span className="resume-date">June 2026 - Present</span>
              </div>
              <p className="resume-item-sub">IEEE Student Branch, VIT Pune</p>
            </div>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Department Representative</h3>
                <span className="resume-date">Jan 2025 - June 2025</span>
              </div>
              <p className="resume-item-sub">Vishwakarma Institute of Technology, Pune</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
