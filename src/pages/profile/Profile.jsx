import React, { useEffect } from "react";
import Profile from "@images/profile_icon.png";
import {Link} from "react-router-dom";
const Dashboard = () => {
  useEffect(() => {
    const profileTab = document.getElementById("nav-profile-tab");
    const creditsTab = document.getElementById("nav-credits-tab");
    const subscriptionTab = document.getElementById("nav-subscription-tab");
    const mainHeading = document.querySelector(".main_heading");

    const handleProfileTabClick = () => {
      mainHeading.textContent = "Account";
    };

    const handleCreditsTabClick = () => {
      mainHeading.textContent = "Credits";
    };

    const handleSubscriptionTabClick = () => {
      mainHeading.textContent = "Subscription";
    };

    profileTab.addEventListener("click", handleProfileTabClick);
    creditsTab.addEventListener("click", handleCreditsTabClick);
    subscriptionTab.addEventListener("click", handleSubscriptionTabClick);

    return () => {
      profileTab.removeEventListener("click", handleProfileTabClick);
      creditsTab.removeEventListener("click", handleCreditsTabClick);
      subscriptionTab.removeEventListener("click", handleSubscriptionTabClick);
    };
  }, []);

  return (
    <section className="container-fluid container_dashbord pb-0 pt-5 d-md-block d-none">
      <div className="container-xl">
        <div className="row profile_tabs_row">
          <div className="col-12">
            <div className="heading d-flex align-items-center justify-content-between">
              <h1 className="text-white main_heading">Account</h1>
              <div className="crose_btn" data-bs-theme="dark">
                <Link to="/dashboard" className="btn-close fs-3"></Link>
              </div>
            </div>
            <div className="profile_tabs mt-4">
              <nav>
                <div
                  className="nav nav-tabs border-0 mb-4"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                  <button
                    className="nav-link"
                    id="nav-credits-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-credits"
                    type="button"
                    role="tab"
                    aria-controls="nav-credits"
                    aria-selected="false"
                  >
                    Credits
                  </button>
                  <button
                    className="nav-link "
                    id="nav-subscription-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-subscription"
                    type="button"
                    role="tab"
                    aria-controls="nav-subscription"
                    aria-selected="true"
                  >
                    Subscription
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabIndex="0"
                >
                  <div className="profile_cards">
                    <div className="d-grid">
                      <div className="card">
                        <div className="heading">
                          <h2>Profile Photo</h2>
                        </div>
                        <div className="set_profile d-flex">
                          <div className="profile_img">
                            <img src={Profile} alt="" />
                          </div>
                          <div className="upload_btns">
                            <div className="d-flex">
                              <div className="file_upload">
                                <label htmlFor="upload" className="btn upload_btn">Upload Photo</label>
                                <input type="file" id="upload"  className="d-none"/>
                              </div>

                              <button className="btn remove_btn">Remove</button>
                            </div>
                            <span className="file_size">
                              Pick a photo up to 4MB.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="heading">
                          <h2>Username</h2>
                          <p>
                            Automatically saves as you change it to a valid
                            username.
                          </p>
                        </div>

                        <div className="username">
                          <form action="">
                            <input type="text" placeholder="uiuxdesigner141" />
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="heading">
                        <h2>Email</h2>
                        <p>This cannot be changed.</p>
                      </div>
                      <div className="email">
                        <span>uiuxdesigner141@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-credits"
                  role="tabpanel"
                  aria-labelledby="nav-credits-tab"
                  tabIndex="0"
                >
                  <div className="credits_cards">
                    <div className="card">
                      <h2>3 Credits Left</h2>
                      <div className="btn_card">
                        <Link to="/pricing" className="btn btn-primary">
                          {" "}
                          + Add Credits
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="nav-subscription"
                  role="tabpanel"
                  aria-labelledby="nav-subscription-tab"
                  tabIndex="0"
                >
                  <div className="subscription_cards">
                    <div className="card">
                      <span className="free_label">FREE</span>
                      <h2>Go PRO to boost your creativity.</h2>
                      <div className="btn_card">
                        <a href="" className="btn btn-primary">
                          {" "}
                          Choose a plan
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <h2>Weekly Plan</h2>
                      <p>Subscription Date: 21/5/2024</p>
                      <p>Duration: 21/5/2024 to 21/6/2025</p>
                      <div className="btn_card">
                        <a href="" className="btn btn-primary">
                          {" "}
                          Unsubscribe
                        </a>
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
  );
};

export default Dashboard;
