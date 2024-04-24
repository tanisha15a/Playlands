
  import  React, {} from 'react';
  function Home(){
  return(
    <>
  
  <section className="page-section" id="services">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">Here we are providing  for your kid.</h3>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i class=" fas fa-solid fa-stack-1x fa-school fa-inverse"></i>
          </span>
          <h4 className="my-3">Building</h4>
          <p className="text-muted">State-of-the-art classrooms,Safe & nurturing space,Interactive learning areas,Inspiring learning spaces,Caring & educational environment</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i class=" fas fa-solid fa-stack-1x fa-arrow-up-z-a fa-inverse"></i>
          </span>
          <h4 className="my-3">Learning</h4>
          <p className="text-muted">Joyful & explorative learning,Personalized attention to each child,Building blocks for future success,Emphasis on creativity, play, and discovery.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i class="fas fa-solid fa-stack-1x fa-pencil fa-inverse"></i>
          </span>
          <h4 className="my-3">Creativity</h4>
          <p className="text-muted">A canvas for imagination and expression,Diverse artistic and creative outlets,Encouraging originality and innovation,Celebrating each child’s unique talents</p>
        </div>
      </div>
    </div>
  </section>

  <section className="page-section bg-light" id="portfolio">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Portfolio</h2>
      <h3 className="section-subheading text-muted">Our Play Land portfolio</h3>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 1*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="./assets/img/portfolio/img2.jpg" alt="..." style={{height:"20rem"}} />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Modern Classrooms</div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 2*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="./assets/img/portfolio/img3.jpg" alt="..." style={{height:"20rem"}} />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Learn with Fun</div>
           
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 3*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="./assets/img/portfolio/img4.jpg" alt="..." style={{height:"20rem"}} />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Responsible Faculties</div>
            
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        {/* Portfolio item 4*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="./assets/img/portfolio/img5.jpg" alt="..." style={{height:"20rem"}} />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Smart Learning</div>
            
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
        {/* Portfolio item 5*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="./assets/img/portfolio/img6.jpg" alt="..." style={{height:"20rem"}} />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Activities</div>
           
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        {/* Portfolio item 6*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src="assets/img/portfolio/img7.jpg" alt="..." style={{height:"20rem"}} />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Bus Facilties</div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="page-section" id="about">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">About</h2>
      <h3 className="section-subheading text-muted">Know More About Us</h3>
    </div>
    <ul className="timeline">
      <li>
        <div className="timeline-image"><img className="rounded-circle img-fluid" src="./assets/img/about/1.jpg" alt="..." /></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>2009-2011</h4>
            <h4 className="subheading">Our Humble Beginnings</h4>
          </div>
          <div className="timeline-body"><p className="text-muted">Play Lands was born from a simple yet powerful idea – to create a nurturing and inspiring environment where young children could embark on their educational journey with joy and curiosity.What began as a small dream blossomed into a vibrant and thriving play school, guided by a deep passion for early childhood education and a commitment to making a difference in the lives of children and families.</p></div>
        </div>
      </li>
      <li className="timeline-inverted">
        <div className="timeline-image"><img className="rounded-circle img-fluid" src="./assets/img/about/pic1.jpg" alt="..." style={{height: "10rem"}} /></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>March 2011</h4>
            <h4 className="subheading">New branch is introduce.</h4>
          </div>
          <div className="timeline-body"><p className="text-muted">In,March 2011, we open a new and modern pattern Branch in Our location,In those early days, resources were scarce, and challenges were plentiful, but and their team persevered, drawing inspiration from the smiles, laughter, and boundless potential of the children in their care. </p></div>
        </div>
      </li>
      <li>
        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>December 2015</h4>
            <h4 className="subheading">Transition to Full Facilties</h4>
          </div>
          <div className="timeline-body"><p className="text-muted">From our humble beginnings, has always been dedicated to fostering a nurturing and stimulating environment where children can learn, grow, and thrive. Over the years, as we've watched our little explorers laugh, learn, and discover the world around them, we've been inspired to continually strive for excellence in all that we do</p></div>
        </div>
      </li>
     
      <li className="timeline-inverted">
        <div className="timeline-image">
          <h4>
            Be Part
            <br />
            Of Our
            <br />
            Story!
          </h4>
        </div>
      </li>
    </ul>
  </div>
</section>
<section className="page-section bg-light" id="team">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
      <h3 className="section-subheading text-muted">Meet “Our Dedicated Team”!</h3>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
          <h4>Parveen Anand</h4>
          <p className="text-muted">Founder & Director</p>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
          <h4>Diana Petersen</h4>
          <p className="text-muted">Child Physchologist</p>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
          <h4>Larry Parker</h4>
          <p className="text-muted">Facilities Manager</p>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">A diverse group of specialists committed to fostering a love for learning,Experienced professionals dedicated to creating a safe and nurturing environment</p></div>
    </div>
  </div>
</section>

<section className="page-section" id="contact">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Contact Us</h2>
      <h3 className="section-subheading text-muted">Here, You can reach to us!</h3>
    </div>
    {/* * * * * * * * * * * * * * * **/}
    {/* * * SB Forms Contact Form * **/}
    {/* * * * * * * * * * * * * * * **/}
    {/* This form is pre-integrated with SB Forms.*/}
    {/* To make this form functional, sign up at*/}
    {/* https://startbootstrap.com/solution/contact-forms*/}
    {/* to get an API token!*/}
    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
      <div className="row align-items-stretch mb-5">
        <div className="col-md-6">
          <div className="form-group">
            {/* Name input*/}
            <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
          </div>
          <div className="form-group">
            {/* Email address input*/}
            <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
          </div>
          <div className="form-group mb-md-0">
            {/* Phone number input*/}
            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form-group-textarea mb-md-0">
            {/* Message input*/}
            <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""} />
            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
          </div>
        </div>
      </div>
      {/* Submit success message*/}
      {/**/}
      {/* This is what your users will see when the form*/}
      {/* has successfully submitted*/}
      <div className="d-none" id="submitSuccessMessage">
        <div className="text-center text-white mb-3">
          <div className="fw-bolder">Form submission successful!</div>
          To activate this form, sign up at
          <br />
          <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
        </div>
      </div>
      {/* Submit error message*/}
      {/**/}
      {/* This is what your users will see when there is*/}
      {/* an error submitting the form*/}
      <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
      {/* Submit Button*/}
      <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
    </form>
  </div>
</section>
       
        
       

  </>
  );
  }
  export default Home;

