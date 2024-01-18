import linkedInLogo from "/linkedin_logo.jpeg";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div id="footer-links">
          <p>Thank You!</p>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/carlos-paz-ortega-75b006b5/">
            <img src={linkedInLogo} alt="X" />
          </a>
        </div>
        <div id="author">
          <p>Projects developed by Carlos Paz</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
