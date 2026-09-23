export default function OffStage() {
  return (
    <div>
      <section className="on_the_stage_posts">
        <div className="entire_stage_post">
          <div className="stage_post">
            <div className="stage_text">
              <h1>Other Internship</h1>
              <h4>At place</h4>
              <button id="hidden-other-b">View more</button>
            </div>
            <img alt="Pic from Internship" src="/images/IMG_0538.JPG" />
          </div>
          <div className="hidden" id="hidden-other-c">
            <p className="hidden-text">
              At Other Internship, Briennna has contriuted a lot, including many social media posts.
              In her time there, she has created over x social posts. More text to fill space.
            </p>
            <div className="hidden-imgs">
              <img alt="Pic from Social Media" className="hidden-img" src="/images/IMG_0537.JPG" />
              <img alt="Pic from Social Media" className="hidden-img" src="/images/IMG_0538.JPG" />
              <img alt="Pic from Social Media" className="hidden-img" src="/images/IMG_0540.JPG" />
              <img alt="Pic from Social Media" className="hidden-img" src="/images/IMG_0647.JPG" />
            </div>
            <a href="#hidden-other-b" id="hidden-other-a">
              View less
            </a>
          </div>
        </div>

        <div className="entire_stage_post">
          <div className="stage_post">
            <div className="stage_text">
              <h1>Arts Admininstration Intern</h1>
              <h4>At Wellspring</h4>
              <button id="hidden-wellspring-b">View more</button>
            </div>
            <img alt="Picture from WellSpring" src="/images/IMG_0537.JPG" />
          </div>
          <div className="hidden" id="hidden-wellspring-c">
            <p className="hidden-text">
              At Wellspring, Briennna has contriuted a lot, including many social media posts. In
              her time there, she has created over x social posts. More text to fill space.
            </p>
            <div className="hidden-imgs">
              <img alt="Pic from Social Media" className="hidden-img" src="/images/IMG_0537.JPG" />
              <img alt="Pic from Social Media" className="hidden-img" src="/images/IMG_0538.JPG" />
              <img alt="Pic from Social Media" className="hidden-img" src="/images/IMG_0540.JPG" />
              <img alt="Pic from Social Media" className="hidden-img" src="/images/IMG_0647.JPG" />
            </div>
            <a href="#hidden-wellspring-b" id="hidden-wellspring-a">
              View less
            </a>
          </div>
        </div>
        <div>
          <h5>
            <a className="go-to-resume" href="#resume">
              Go to Resume
            </a>
          </h5>
        </div>
        <h1 className="subsection_title">Other Jobs</h1>
        <div className="entire_stage_post">
          <div className="stage_post" style={{ flexDirection: 'column' }}>
            <div className="stage_text" style={{ width: '100%' }}>
              <h1>Student Ambassador</h1>
              <h4>WMU: Office of Admissions</h4>
              <button id="hidden-ambassador-b" style={{ alignSelf: 'center' }}>
                View more
              </button>
            </div>
            <div className="hidden" id="hidden-ambassador-c">
              <p className="hidden-text">
                As a student ambassador at Western Michigan's Office of Admissions, Brienna guides
                students around the campus, ensuring that every student prospect feels included and
                understood. More text to fill space.
              </p>
              <a href="#hidden-ambassador-b" id="hidden-ambassador-a">
                View less
              </a>
            </div>
          </div>
        </div>
        <div className="entire_stage_post">
          <div className="stage_post" style={{ flexDirection: 'column' }}>
            <div className="stage_text" style={{ width: '100%' }}>
              <h1>Food Runner/Barback</h1>
              <h4>Airway Fun Center</h4>
              <button id="hidden-barback-b" style={{ alignSelf: 'center' }}>
                View more
              </button>
            </div>
            <div className="hidden" id="hidden-barback-c">
              <p className="hidden-text">
                As a food runner at Airway Fun Center, Brienna ensures that patrons are served in a
                timely manner and with the utmost respect. More text to fill space.
              </p>
              <a href="#hidden-barback-b" id="hidden-barback-a">
                View less
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="resume" style={{ padding: '1%' }}>
        <h1 className="subsection_title">Downloadable Resume</h1>
        <img
          alt="Brienna Resume"
          src="/documents/brienna_halterman_resume.png"
          style={{
            borderRadius: '3%',
            display: 'block',
            margin: '2% auto',
            border: 'solid 2px #24083d',
            width: '75%',
          }}
        />
        <a
          className="btn-primary"
          download="Brienna_Halterman_Resume"
          href="/documents/brienna_halterman_resume.pdf"
          style={{ margin: '2% auto' }}
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}
