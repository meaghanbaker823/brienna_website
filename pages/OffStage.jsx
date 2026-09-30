import OffStagePost from '../components/OffStagePost';
import ResumeButton from '../components/ResumeButton';

export default function OffStage() {
  return (
    <div>
      <section className="on_the_stage_posts">
        <OffStagePost
          hidden_text="At Other Internship, Briennna has contriuted a lot, including many social media posts. In her time there, she has created over x social posts. More text to fill space."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          location="Place"
          name="Other Internship"
          title_img="IMG_0538.JPG"
        />

        <OffStagePost
          hidden_text="At Wellspring, Briennna has contriuted a lot, including many social media posts. In her time there, she has created over x social posts. More text to fill space."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          location="Wellspring"
          name="Arts Admininstration Intern"
          title_img="IMG_0537.JPG"
        />

        <ResumeButton />

        <h1 className="subsection_title">Other Jobs</h1>

        <OffStagePost
          hidden_text="As a student ambassador at Western Michigan's Office of Admissions, Brienna guides
                students around the campus, ensuring that every student prospect feels included and
                understood. More text to fill space."
          location="WMU: Office of Admissions"
          name="Student Ambassador"
        />

        <OffStagePost
          hidden_text="As a food runner at Airway Fun Center, Brienna ensures that patrons are served in a
                timely manner and with the utmost respect. More text to fill space."
          location="Airway Fun Center"
          name="Food Runner/Barback"
        />
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
