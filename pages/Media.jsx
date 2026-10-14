import Video from '../components/Video';
import PageHeader from '../components/PageHeader';
export default function Media() {
  return (
    <div>
      <PageHeader title="Video Performances" />
      <h1 className="subsection_title">Academic Performances</h1>
      <div style={{ background: 'linear-gradient(#401257, #210c61)' }}>
        <h3 className="smaller_subsection_title">Junior Recital</h3>
        <section className="video_blocks">
          <div style={{ paddingLeft: '3.5rem', paddingRight: '3.5rem' }}>
          <Video video_id="nggmIpdBc7c" video_title={'Junior Recital'}/>
          </div>
          <div className="hidden-text">
            <p>In her junior recital, Brienna performed x, y, and z. More text to fill space. </p>
            <p>
              <a>Future Link</a>
            </p>
          </div>
        </section>
        <h3 className="smaller_subsection_title">Senior Recital</h3>
        <section className="video_blocks">
          <div className="video_block" style={{ paddingLeft: '3.5rem', paddingRight: '3.5rem' }}>
            <h1>Coming Soon!</h1>
            <p>Senior Recital</p>
          </div>
          <div className="hidden-text">
            <p>In her senior recital, Brienna performed x, y, and z. More text to fill space. </p>
            <p>
              <a>Future Link</a>
            </p>
          </div>
        </section>
        <h3 className="subsection_title">Vocal Performances</h3>
        <section className="video_blocks">
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 1"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 2"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 3"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 4"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 5"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 6"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 7"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 8"/>
        </section>
        <h1 className="subsection_title">Theater Performances</h1>
        <section className="video_blocks">
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 1"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 2"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 3"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 4"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 5"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 6"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 7"/>
          <Video video_id="nggmIpdBc7c" video_title= "Video Title 8"/>
        </section>
      </div>
    </div>
  );
}
