import AboutMe from '../components/AboutMe';
import HomeRes from '../components/HomeRes';

export default function Home() {
  return (
    <div>
      <div className="page_title">
        <h1>Brienna Halterman</h1>
        <h6>She/Her</h6>
        <h4>Singer | Actor | Communicator.</h4>
      </div>
      <div style={{ background: `linear-gradient(#401257, #210c61)` }}>
        <div className="stage_header">
          <p className="page_description">
            Brienna has been on the stage many times between various theater productions, opera
            performances, and opera workshops. More text to fill the space. More text to fill the
            space. More text to fill the space. More text to fill the space. More text to fill the
            space. More text to fill the space. More text to fill the space. More text to fill the
            space. More text to fill the space. More text to fill the space.
          </p>
          <img alt="Brienna" src="/images/IMG_0537.JPG" />
          <p>Description for highlight image</p>
        </div>

        <HomeRes />
        
        <AboutMe
          alternate="Brienna Halterman"
          img_src="IMG_0537.JPG"
          paragraph="Hello! My name is Brienna Halterman and I am an aspiring singer/actor from the Chicagoland area. I’m currently attending Western Michigan University with the goal of graduating with a Bachelor of Science in Music Performance: Vocal and Digital Media & Journalism."
        />
      </div>
    </div>
  );
}
