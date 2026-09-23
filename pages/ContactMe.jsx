export default function ContactMe() {
  return (
    <div>
      <section>
        <div className="page_title">
          <h1>Contact Me!</h1>
        </div>

        <div id="contact">
          <div>
            <a href="mailto:briennahalterman@gmail.com" title="Email Brienna!">
              <i className="fa-solid fa-envelope" />
            </a>
            <p>Email Brienna!</p>
          </div>
          <div>
            <a href="tel:+16308049606" title="Call Brienna!">
              <i className="fa-solid fa-phone" />
            </a>
            <p>Call Brienna!</p>
          </div>
          <div>
            <a>
              <i className="fa-brands fa-linkedin" title="Follow Brienna on Linkedin!" />
            </a>
            <p>Follow Brienna on Linkedin!</p>
          </div>
          <div>
            <a>
              <i className="fa-brands fa-instagram" title="Follow Brienna on Instagram!" />
            </a>
            <p>Follow Brienna on Instagram!</p>
          </div>
          <div>
            <a>
              <i className="fa-brands fa-tiktok" title="Follow Brienna on TikTok!" />
            </a>
            <p>Follow Brienna on TikTok!</p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="subsection_title">Contact</h1>
        <div id="form">
          <form>
            <div id="form-names">
              <div>
                <label htmlFor="fname">First Name</label>
                <input required type="text" />
              </div>
              <div>
                <label htmlFor="lname">Last Name</label>
                <input required type="text" />
              </div>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input required type="email" />
            </div>

            <div>
              <label htmlFor="msg">Message</label>
              <textarea />
            </div>

            <input type="submit" />
          </form>
        </div>
      </section>
    </div>
  );
}
