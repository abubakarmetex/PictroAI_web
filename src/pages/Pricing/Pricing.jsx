import React from "react";
import tick_icon from "@images/tick_icon.svg";
import crose_icon from "@images/crose_icon.svg";
import { Container } from "react-bootstrap";
import { Sidebar } from "../../components/Dashboard";

import "../../App.scss";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Container fluid className="p-0">
        <section className="container-fluid container_dashbord pb-0 pt-5 d-md-block d-none">
          <div className="container-xl">
            <div className="row">
              <div className="col-3">
                <Sidebar />
              </div>
              <div className="col-9">
                <div className="pricing_wrapper">
                  <h1 className="text-white text-center pricing_main">
                    Unlock the power of Pictro Ai
                  </h1>
                  <p className="text-center pricing_main">
                    Pick a plan that's perfectly suited to your unique needs.
                  </p>
                  <div className="pricing_cards_wrapper">
                    <div className="pricing_card card_free">
                      <div className="pricing_card_wrapper">
                        <div className="card_header">
                          <span className="plan_name text-center d-block">
                            Free
                          </span>
                          <div className="price_time">
                            <span className="price">$0</span>
                            <span className="time">/ month</span>
                          </div>
                          <span className="plan_dic d-block text-center mt-2">
                            Forever
                          </span>
                        </div>
                        <div className="card_body">
                          <p className="body_heading text-white">
                            175 daily tokens
                          </p>
                          <div className="plan_features">
                            <ul>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>175 tokens, resets once per day</span>
                              </li>
                              <li>
                                <img src={crose_icon} alt="" />{" "}
                                <span>Unlock Premium Models</span>
                              </li>
                              <li>
                                <img src={crose_icon} alt="" />{" "}
                                <span>Faster Processing Times</span>
                              </li>
                              <li>
                                <img src={crose_icon} alt="" />{" "}
                                <span>Access Exclusive Styles</span>
                              </li>
                              <li>
                                <img src={crose_icon} alt="" />{" "}
                                <span>Unlimited Variants</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_card card_basic">
                      <div className="pricing_card_wrapper">
                        <div className="card_header">
                          <span className="plan_name text-center d-block">
                            Basic
                          </span>
                          <div className="price_time">
                            <span className="price">$5.04</span>
                            <span className="time">/ Weekly</span>
                          </div>
                          {/* <span className="plan_dic d-block text-center mt-2">
                            Billed yearly, ex. tax
                          </span> */}
                          <div className="plan_btn text-center mt-4">
                            <a href="https://buy.stripe.com/test_9AQ28xbh5eHgemA289" className="btn btn-primary border-0">
                              Subscribe To Basic
                            </a>
                          </div>
                        </div>
                        <div className="card_body">
                          <p className="body_heading text-white">
                            10,000 Weekly tokens
                          </p>
                          <div className="plan_features">
                            <ul>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>
                                  10,000 tokens, resets on your billing date
                                </span>
                              </li>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>Unlock Premium Models</span>
                              </li>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>Faster Processing Times</span>
                              </li>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>Access Exclusive Styles</span>
                              </li>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>Unlimited Variants</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pricing_card card_standard">
                      <div className="pricing_card_wrapper">
                        <div className="card_header">
                          <span className="plan_name text-center d-block">
                            Standard
                          </span>
                          <div className="price_time">
                            <span className="price">$15.03</span>
                            <span className="time">/ Month</span>
                          </div>
                          {/* <span className="plan_dic d-block text-center mt-2">
                            Billed yearly, ex. tax
                          </span> */}
                          <div className="plan_btn text-center mt-4">
                            <a href="https://buy.stripe.com/test_bIYeVjgBp9mWfqE7ss" className="btn btn-primary border-0">
                              Subscribe To Standard
                            </a>
                          </div>
                        </div>
                        <div className="card_body">
                          <p className="body_heading text-white">
                            30,000 Monthly tokens
                          </p>
                          <div className="plan_features">
                            <ul>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>
                                  30,000 tokens, resets on your billing date
                                </span>
                              </li>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>Unlock Premium Models</span>
                              </li>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>Faster Processing Times</span>
                              </li>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>Access Exclusive Styles</span>
                              </li>
                              <li>
                                <img src={tick_icon} alt="" />{" "}
                                <span>Unlimited Variants</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
