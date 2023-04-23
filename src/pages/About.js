import React from "react";
import team from "../images/team.svg";
import { targetMarket, values, customers } from "./aboutData";

const About = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="col">
          <section className="row mt-3 ">
            <div className="col-md-6">
              <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded container-fluid mx-auto">
                <div className="card-body">
                  <h5 className="card-title">Mission Statement</h5>

                  <p className="card-text">
                    At our software company, our mission is to empower
                    businesses and individuals to achieve their full potential
                    through innovative and intuitive technology solutions. We
                    are dedicated to delivering exceptional software products
                    and services that enhance productivity, streamline
                    processes, and improve overall efficiency. Our commitment to
                    excellence is reflected in every aspect of our work, from
                    the quality of our code to the responsiveness of our
                    customer support. We strive to create long-lasting
                    partnerships with our clients, built on trust, transparency,
                    and a shared commitment to success. At the heart of our
                    mission is a passion for technology and a belief in its
                    power to transform the world for the better.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mx-auto">
              <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded container-fluid">
                <div className="card-body">
                  <h5 className="card-title">Vision Statement</h5>

                  <p className="card-text">
                    Our software company envisions a future where technology is
                    seamlessly integrated into every aspect of daily life,
                    enabling people to work, learn, and communicate with greater
                    ease and efficiency. We see ourselves as a driving force
                    behind this vision, constantly pushing the boundaries of
                    what is possible with innovative software solutions. Our
                    goal is to create software that not only meets the needs of
                    today's users, but anticipates their needs and adapts to
                    their changing circumstances. We believe that by embracing
                    cutting-edge technologies and fostering a culture of
                    continuous improvement, we can help our clients and partners
                    achieve their most ambitious goals. Our vision is to be
                    recognized as a leader in the software industry, known for
                    our commitment to excellence, our agility in responding to
                    market changes, and our unwavering focus on delivering value
                    to our customers.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="row">
            <div className="col-md-6 ">
              <div className="bg-body-secondary shadow-lg p-3 mb-5  bg-body-tertiary rounded container-fluid">
                <h2>Our primary concerns</h2>
                {targetMarket.map((item) => {
                  const { id, img, description } = item;
                  return (
                    <li key={id} className="list-unstyled">
                      <div className="card mt-4">
                        <img src={img} className="card-img-top" alt="image1" />
                        <div className="card-body">
                          <p className="card-text">{description}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="bg-body-secondary shadow-lg p-3 mb-5  bg-body-tertiary rounded container-fluid">
                <h1 className="text-capitalize"> The values we stand for</h1>
                {values.map((item) => {
                  const { id, img, title, description } = item;
                  return (
                    <li key={id} className=" list-unstyled">
                      <img src={img} className=" rounded-circle" alt="team" />
                      <h5>{title}</h5>
                      <p>{description}</p>
                    </li>
                  );
                })}
                <div className="row">
                  <div className="d-flex flex-row">
                    
                      
                      {customers.map((item) => {
                        const { id, img, title, description } = item;
                        return (
                          <li key={id} className=" list-unstyled m-3">
                            <img
                              src={img}
                              className=" rounded-circle w-50 h-25 "
                              alt="team"
                            />
                            <h5>{title}</h5>
                            <p>{description}</p>
                          </li>
                        );
                      })}
                   
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
