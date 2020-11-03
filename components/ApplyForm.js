import { useState } from "react";
import ReactMarkdown from "react-markdown/with-html";

const encode = (data) => {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

const ApplyForm = ({
  title,
  careerTitle,
  introText,
  privacyText,
  thankYouMessage,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    let data = encode({
      "form-name": "apply-form",
      "first-name": firstName,
      "last-name": lastName,
      email: email,
      resume: resume,
      message: message,
    });
    
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setShowThanks(true);
      })
      .catch((error) => console.log(error));

    e.preventDefault();
  };

  const onFileChange = (e) => {
    if (e.target.files[0]) {
      setResume(e.target.files[0]);
      setFileName(e.target.files[0].name);
    } else {
      setResume(null);
      setFileName("");
    }
  };

  return (
    <section className="apply-form" id="apply-form-component">
      <div className="container-medium">
        <div className="column left">
          {title && <p className="title">{title}</p>}
          {careerTitle && <p className="career-title">{careerTitle}</p>}
          {introText && <p className="intro">{introText}</p>}
        </div>

        <div className="column right">
          {!showThanks && (
            <form
              name="apply-form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input type="hidden" name="form-name" value="apply-form" />
              <div
                className={firstName ? `input-wrapper filled` : `input-wrapper`}
              >
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="first-name">First Name</label>
              </div>
              <div
                className={lastName ? `input-wrapper filled` : `input-wrapper`}
              >
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="last-name">Last Name</label>
              </div>
              <div className={email ? `input-wrapper filled` : `input-wrapper`}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div
                className={
                  fileName ? `input-wrapper file filled` : `input-wrapper file`
                }
              >
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={onFileChange}
                  className="file-upload"
                />
                <label htmlFor="resume">Add Resume</label>
                <span className="file-name">{fileName}</span>
              </div>
              <div
                className={message ? `input-wrapper filled` : `input-wrapper`}
              >
                <input
                  type="text"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="message">Message</label>
              </div>
              <div className="cta-wrapper">
                <button type="submit" className="btn">
                  Submit
                </button>
                {/* TODO: privacy page? */}
                {privacyText && (
                  <ReactMarkdown
                    source={privacyText}
                    escapeHtml={false}
                    className="privacy"
                  />
                )}
              </div>
            </form>
          )}
          {showThanks && thankYouMessage && <p>{thankYouMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
