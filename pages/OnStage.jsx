import ResumeButton from '../components/ResumeButton';
import OnStagePost from '../components/OnStagePost';
import PageHeader from '../components/PageHeader';
export default function OnStage() {
  return (
    <section style={{ background: 'linear-gradient(#401257, #210c61)' }}>
      <PageHeader title="On the Stage" />
      <div className="stage_header">
        <p className="page_description">
          Brienna has performed in over 30 theatre productions since finding her passion for the stage at 15 years old. With roles ranging from big to small, Brienna is so grateful to have had the opportunities to grow as an actor, musician, and person through performing. On a different kind of stage, Brienna has performed the National Anthem at multiple events such as Western Michigan University’s sporting events, Addison Park District’s 2026 POW! 5k, and the Addison Township Alliance’s 2026 Battle of the Badges.
        </p>
        <img alt="Brienna on stage" src="/images/IMG_0537.JPG" />
        <p>Description for highlight image</p>
      </div>
      <ResumeButton />
      <h1 className="subsection_title">Theater Productions</h1>

      <section className="on_the_stage_posts">
        <OnStagePost
          hidden_text="Brienna performed as Hartley, the ship’s bandleader, performing the songs “Doing the Latest Rag” and “Autumn”. This performance was in collaboration between WMU’s School of Theatre & Dance and the Irving S. Gilmore School of Music; Directed by Jay Berkow, Voice Direction by Wendy Wheeler, and Conducting by Bruce Uchimura.
              To see show summary, click on this link: https://wmich.edu/theatre/titanic "
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Titanic"
          role="Hartly"
          title_img="titanic_1.jpeg"
        />

        <OnStagePost
          hidden_text="Based on the hit 2001 film, Brienna performed in Legally Blonde at Western Michigan University as a Pit Vocalist. She was also the Understudy for Enid Hoopes, and the Swing for Store Manager/Elle’s Mom; Directed by Jay Berkow and Music Direction by Matt Shabala."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Legally Blonde"
          role="Enid U/S"
          title_img="legally_1.jpeg"
        />

        <OnStagePost
          hidden_text="Based on the book by Rick Riordan, Brienna performed in The Lightning Thief as Sally and Charon. While helping in overall ensemble vocals, Brienna performed songs “Strong” and “D.O.A.”; Directed by Amber Mitchell at Stageworks Theatre Arts in Geneva, IL."
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
          hidden_text="Based on the 1988 Cult Classic movie, Brienna assumed the lead role of Veronica Sawyer in her second opportunity to perform in Heathers: The Musical. With this performance at Stageworks Theatre Arts in Geneva, IL, Brienna performed many songs including “Beautiful”, “Seventeen”, and “I Say No”; Directed by Amber Mitchell."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Heathers: The Musical"
          role="Veronica Sawyer"
          title_img="heathers_1.png"
        />

        <OnStagePost
          hidden_text="Based on the book by Stephen King, Brienna performed as Margaret White, Carrie’s mother, in this production of Carrie: The Musical at Stageworks in Geneva, IL. Throughout the performance, Brienna’s work was showcased in a multitude of songs including “And Eve Was Weak”, “I Remember How Those Boys Could Dance”, and “When There’s No One”; Directed by Amber Mitchell."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Carrie: The Musical"
          role="Margaret White"
          title_img="carrie_1.jpg"
        />

        <OnStagePost
          hidden_text="Brienna performed as Rona Lisa Peretti, the moderator of the Putnam County Spelling Bee (and previous winner), at Stageworks Theatre Arts in Geneva, IL. With songs such as “My Favorite Moment of the Bee”, Rona serves as the unofficial narrator for many moments of the show; Directed by Amber Mitchell."
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="The 25th Annual Putnam County Spelling Bee"
          role="Rosa Lisa Peretti"
          title_img="IMG_0540.JPG"
        />

        <ResumeButton />

        <h1 className="subsection_title">Opera Performances</h1>

        <OnStagePost
          hidden_text="Die Fledermaus is an operetta written by Johann Staruss. In this hilarious production, Brienna took on the comedic role of Frosch, the jailer, and a chorus member at Western Michigan University; Directed by Emmanuel-Cristian Caraman.
    - Link to summery on WMU https://wmich.edu/music/events/die-fledermaus"
          imgs={['IMG_0537.JPG', 'IMG_0538.JPG', 'IMG_0540.JPG', 'IMG_0647.JPG']}
          name="Die Fledermaus"
          role="Frosch/Chorus"
          title_img="IMG_0540.JPG"
        />

        <OnStagePost
          hidden_text="Dido & Aeneas marked Brienna’s first performance at Western Michigan University and first opera performance; Directed by Emmanuel-Cristian Caraman.
    - Link to summery on WMU https://wmich.edu/music/events/musiceventsdido"
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
