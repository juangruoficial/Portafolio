const Copyright = () => {
  return (
    <section className="section">
      <section className="copyright">
        <section className="container">
          <section className="inner">
            <aside className="left">
              <p>
                Developed with love by{" "}
                <a
                  href="https://www.linkedin.com/juancruz9696/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Juan Cruz
                </a>
                © {new Date().getFullYear()}
              </p>
            </aside>
            <aside className="right">
              <ul>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </aside>
          </section>
        </section>
      </section>
    </section>
  );
};
export default Copyright;
