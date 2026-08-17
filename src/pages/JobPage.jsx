import "../assets/css/job.css";

export default function Jobpage() {
  return (
    <>
      <main>
        <section className="job-section">
          <div className="job-div">
            <div className="job-div-top">
              {/* <h1>JOBS</h1> */}
              <h3>NO OPEN POSITIONS</h3>
            </div>
            <div className="job-div-low">
              <h3>UNSOLICITED APPLICATIONS</h3>
              <div>
                <p>We welcome applications from talented individuals.</p>
                <p>
                  Please send your CV, portfolio, and a short letter explaining
                  why you want to join our studio.
                </p>
              </div>
              <div>
                <p>
                  We try to reply to all applicants, but may only contact those
                  selected for an interview.
                </p>
              </div>
              <div className="job-list">
                <div>
                  <p>
                    Send your application to{" "}
                    <a href="mailto:francescozonca.studio@gmail.com">
                      francescozonca.studio@gmail.com
                    </a>
                    , including:
                  </p>
                </div>
                <div>
                  <ul>
                    <li>a short cover letter</li>
                    <li>a detailed CV</li>
                    <li>a complete portfolio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
