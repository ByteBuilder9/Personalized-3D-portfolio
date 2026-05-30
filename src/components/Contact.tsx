import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { achievements, education, profile } from "../data/portfolio";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                {profile.email}
              </a>
            </p>
            <p>{profile.phone}</p>
            <p>{profile.location}</p>
            <h4>Education</h4>
            {education.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="contact-box">
            <h4>Links</h4>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
            <h4 className="contact-achievements-title">Achievements</h4>
            {achievements.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Abhishek Garg</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
