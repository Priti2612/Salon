import React from 'react'

const Team = () => {
  return (
    <>
      <section id="team" className="team section-bg mt-5">
        <div className="container" data-aos="fade-up">
          <p className="team-header">BEAUTY AND SPA CENTER</p>
          <p className="team-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
              <div className="member">
                <div className="member-img">
                  <img src="https://images.pexels.com/photos/12488389/pexels-photo-12488389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="img-fluid" alt />
                  <div className="social">
                    <p id="social-type">Sauna Massage</p>
                    <p id="social-name">NATURAL HEALTH</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
              <div className="member">
                <div className="member-img">
                  <img src="https://images.pexels.com/photos/12488389/pexels-photo-12488389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="img-fluid" alt />
                  <div className="social">
                  <p id="social-type">Spa Treatment</p>
                    <p id="social-name">Mind Relaxation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
              <div className="member">
                <div className="member-img">
                  <img src="https://images.pexels.com/photos/12488389/pexels-photo-12488389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="img-fluid" alt />
                  <div className="social">
                    <p id="social-type">Cosmetology</p>
                    <p id="social-name">Essential Balance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Team