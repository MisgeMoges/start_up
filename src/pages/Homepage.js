import React from "react";
import team from "../images/team.svg";

const Homepage = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <article className="col-md-8 col-lg-6 col-xl-6 mt-5">
            <h1>
              Transforming the digital landscape with creative code and
              boundless imagination
            </h1>
            <br />
            <br />
            <p className="fs-5">
              At LebawiMisgana, we're passionate about creating innovative
              software solutions that transform the way people live, work, and
              play. Our team of talented engineers, designers, and developers
              are dedicated to building cutting-edge products that make a real
              difference in the world. Here are just a few of the reasons why we
              think you'll love working with us:
            </p>
            <button className="btn btn-primary w-25">Start now</button>
          </article>
          <article className="col-md-4 col-lg-6 col-xl-6">
            <div className="card my-4 shadow p-3 mb-5 bg-body-tertiary rounded">
              <img src={team} className="" alt="team" />
              <div className="card-body">
                <h5 className="card-title">LM Software Team</h5>
                <p className="card-text">
                  Our team is working to deliver high-quality software products
                  that meet the needs of their clients or users. This requires
                  collaboration, communication, and coordination among team
                  members. The team must work together to identify requirements,
                  design the system architecture, write the code, test the
                  product, and deploy it to users.
                </p>
                <a
                  href="/contact"
                  className="btn btn-primary d-block text-capitalize"
                >
                  Join Us
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
