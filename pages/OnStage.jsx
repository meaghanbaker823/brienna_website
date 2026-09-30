import ResumeButton from '../components/ResumeButton';
import OnStagePost from '../components/OnStagePost';
export default function OnStage() {
  return (
    <section style={{ background: 'linear-gradient(#401257, #210c61)' }}>
      <div className="stage_header">
        <p className="page_description">
          Brienna has been on the stage many times between various theater productions, opera
          performances, and opera workshops. More text to fill the space. More text to fill the
          space. More text to fill the space. More text to fill the space. More text to fill the
          space. More text to fill the space. More text to fill the space. More text to fill the
          space. More text to fill the space. More text to fill the space.
        </p>
        <img alt="Brienna on stage" src="/images/IMG_0537.JPG" />
        <p>Description for highlight image</p>
      </div>
      <ResumeButton />
      <h1 className="subsection_title">Theater Productions</h1>

      <section className="on_the_stage_posts">
        <OnStagePost
          hidden_text="In Titanic, Brienna played the part of Hartly. The production of Titanic was put on by
              Western Michigan University. More text to fill the space."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Titanic"
          role="Hartly"
          title_img="IMG_0537.JPG"
        />

        <OnStagePost
          hidden_text="In Legally Blonde, Brienna was the understudy for Enid. The production of Legally
              Blonde was put on by Western Michigan University. More text to fill the space."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Legally Blonde"
          role="Enid U/S"
          title_img="IMG_0538.JPG"
        />

        <OnStagePost
          hidden_text="In The Lightning Thief, Brienna played the part of Sally and Charon. The production of
              The Lightning Theif was put on by Stageworks. More text to fill the space."
          imgs={[
            'lightning_9.JPG',
            'lightning_13.JPG',
            'lightning_12.JPG',
            'lightning_16.JPG',
            'lightning_19.JPG',
            'lightning_20.JPG',
            'lightning_21.JPG',
            'lightning_5.JPG',
            'lightning_23.JPG',
          ]}
          name="The Lightning Thief"
          role="Sally/Charon"
          title_img="lightning_22.JPG"
        />

        <OnStagePost
          hidden_text="In Heathers, Brienna played the part of Veronica Sawyer. The production of Heathers
              was put on by Stageworks. More text to fill the space."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Heathers: The Musical"
          role="Veronica Sawyer"
          title_img="IMG_0540.JPG"
        />

        <OnStagePost
          hidden_text="In Carrie, Brienna played the part of Margaret White. The production of Carrie: The
              Musical was put on by Stageworks. More text to fill the space."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Carrie: The Musical"
          role="Margaret White"
          title_img="IMG_0540.JPG"
        />

        <OnStagePost
          hidden_text="In The 25th Annual Putnam County Spelling Bee, Brienna played the part of Rosa Lisa
              Peretti. The production of The 25th Annual Putnam County Spelling Bee was put on by
              Stageworks. More text to fill the space."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="The 25th Annual Putnam County Spelling Bee"
          role="Rosa Lisa Peretti"
          title_img="IMG_0540.JPG"
        />

        <ResumeButton />

        <h1 className="subsection_title">Opera Performances</h1>

        <OnStagePost
          hidden_text="In this workshop, Brienna sang scenes from Frosch as part of the Chorus. More text to
              fill the space."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Die Fledermaus"
          role="Frosch/Chorus"
          title_img="IMG_0540.JPG"
        />

        <OnStagePost
          hidden_text="In this workshop, Brienna sang scenes from Dido & Aeneas as part of the Chorus. More
              text to fill the space."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Dido & Aeneas performance"
          role="Chorus"
          title_img="IMG_0540.JPG"
        />
      </section>

      <section id="resume" style={{ padding: '1%' }}>
        <h1 className="subsection_title">Downloadable Resume</h1>
        <img
          alt="Preview of Brienna Halterman's creative resume"
          src="/documents/brienna_halterman_creative_resume_img.png"
          style={{
            borderRadius: '3%',
            display: 'block',
            margin: '2% auto',
            outline: 'solid 2px #24083d',
            width: '75%',
          }}
        />
        <a
          className="btn-primary"
          download="Brienna_Halterman_Resume"
          href="/documents/brienna_halterman_creative_resume.pdf"
          style={{ display: 'block', margin: '2% auto' }}
        >
          Download Resume
        </a>
      </section>
    </section>
  );
}
