const Copyright = () => {
  return (
    <div className="section">
      <div className="copyright">
        <div className="container">
          <div className="inner">
            <div className="left">
              <p>
                Developed with love by{" "}
                <a
                  href="https://www.linkedin.com/in/juan-gru-oficial-undefined-a84511274/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Juan Cruz
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="right">
              <ul>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
