export default function Home() {
  return (
    <div>
      <div className="page_title">
        <h1>Brienna Halterman</h1>
        <h6>She/Her</h6>
        <h4>Singer | Actor | Communicator.</h4>
      </div>
      <h1 className="subsection_title">Headshot and Resume</h1>
      <div className="home_pic_and_res">
        <img
          alt="Brienna Halterman headshot"
          className="home_img"
          src="/images/brienna_halterman_headshot1.JPG"
        />
        <img
          alt="Brienna Halterman creative resume"
          className="home_img"
          src="/documents/brienna_halterman_creative_resume_img.png"
        />
        <a
          className="btn-primary"
          download="Brienna_Halterman_Headshot"
          href="/images/brienna_halterman_headshot1.JPG"
        >
          Download Headshot
        </a>
        <a
          className="btn-primary"
          download="Brienna_Halterman_Resume"
          href="/documents/brienna_halterman_creative_resume.pdf"
        >
          Download Resume
        </a>
      </div>

      <h1 className="subsection_title">About Me</h1>
      <section className="about_me">
        <img
          alt="Brienna Halterman"
          className="about_me_item"
          src="/images/IMG_0537.JPG"
          style={{ width: '45%' }}
        />
        <p className="about_me_item" style={{ textAlign: 'center', fontSize: 'large' }}>
          Hello! My name is Brienna Halterman and I am an aspiring singer/actor from the Chicagoland
          area. I’m currently attending Western Michigan University with the goal of graduating with
          a Bachelor of Science in Music Performance: Vocal and Digital Media & Journalism.
        </p>
      </section>

      <h1 className="subsection_title">What Have I Done Recently</h1>
      <div className="done_recently">
        <ul className="done_recently_item">
          <li>I just performed my Junior Recital!</li>
          <li>I just performed in Die Fledermaus!</li>
          <li>I am slaying life!</li>
        </ul>
        <img
          alt="Brienna Halterman performing at her junior recital"
          className="done_recently_item"
          src="/images/IMG_1929.PNG"
          style={{ width: '50%', float: 'right' }}
        />
      </div>
    </div>
  );
}
