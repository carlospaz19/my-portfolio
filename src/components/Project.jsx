import React, { useState } from "react";
import "./Project.css";

const Project = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <>
      <section className="presentation">
        <div>
          <h1>Welcome to my portfolio 1.0</h1>
        </div>
      </section>
      <section className="intro">
        <p>
          Hello, my name is Carlos Paz Ortega.
          <br></br>
          Welcome to my professional journey! As a seasoned QA Engineer with 12
          years of experience, I&apos;ve honed my skills in ensuring software
          quality and reliability. My journey has been marked by continuous
          learning, including mastering the MERN (MongoDB, Express.js, React,
          Node.js) stack technologies. This portfolio is a testament to my
          commitment to excellence in software testing and a showcase of
          projects where I&apos;ve applied these cutting-edge skills. Join me in
          exploring how I&apos;ve contributed to creating robust and
          user-friendly applications.
        </p>
      </section>
      <section className="projects">
        <div className="wrapper">
          <div className="container">
            <div className="card tabs">
              {["tab-1", "tab-2", "tab-3", "tab-4", "tab-5"].map(
                (tab, index) => (
                  <React.Fragment key={tab}>
                    <input
                      id={tab}
                      type="radio"
                      className="tab-selector"
                      name="tab"
                      checked={activeTab === tab}
                      onChange={() => setActiveTab(tab)}
                    />
                    <label htmlFor={tab} className={`tab tab-${index + 1}`}>
                      {`Project ${index + 1}`}
                    </label>
                  </React.Fragment>
                )
              )}
              <div className="tabsShadow"></div>
              <div
                className="glider"
                style={{
                  left: `${20 * (parseInt(activeTab.split("-")[1]) - 1)}%`,
                }}
              ></div>
              <section className="content">
                <div className="item" id="content-1">
                  <h2 className="tab-title tab-one">Landing Page</h2>
                  <p>
                    The website is an online store for Magic: The Gathering
                    (MTG) cards. It offers a catalog of MTG cards categorized by
                    colors like White, Black, Red, Green, and Blue, as well as
                    Monocolored, Multicolored, and Lands. The site also provides
                    information on MTG gaming centers located in Mérida,
                    Yucatán, with notices about maintenance and updates for
                    community members. Users can register to receive offers and
                    news related to MTG, and there is an invitation to play at
                    the physical centers where they teach the game rules for
                    newcomers.
                    <br></br>
                    <br></br>
                    Technologies:
                    <ol>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ol>
                  </p>
                  <a
                    href="https://venerable-dasik-9ef527.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Demo
                  </a>
                  <br></br>
                  <a
                    href="https://github.com/carlospaz19/MTG-Landing-Page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link
                  </a>
                </div>
                <div className="item" id="content-2">
                  <h2 className="tab-title tab-two">CRUD Application</h2>
                  <p>
                    The webpage is a Warhammer 40k - Datasheet Creator tool that
                    allows users to craft new Adeptus units for their armies in
                    the Warhammer 40k universe. It features a form for inputting
                    unit names, chapters, and weaponry choices, all dedicated to
                    the in-game lore of serving the God-Emperor. The site also
                    provides a gallery of Warhammer-related images and includes
                    inspirational quotes from the game&apos;s universe,
                    suggesting it is a fan-made resource for enthusiasts of the
                    tabletop game to expand their gameplay experience.
                    <br></br>
                    <br></br>
                    Technologies:
                    <ol>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Local Storage</li>
                    </ol>
                  </p>
                  <a
                    href="https://peaceful-crumble-63f988.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                  <br></br>
                  <a
                    href="https://github.com/carlospaz19/warhammer40k"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link
                  </a>
                </div>
                <div className="item" id="content-3">
                  <h2 className="tab-title tab-three">Dashboard API</h2>
                  <p>
                    The website is a resource for cryptocurrency enthusiasts
                    offering insights into the world of digital currencies. It
                    is designed to serve as a guide for understanding market
                    trends in cryptocurrencies and aims to be a trusted source
                    for information on new crypto-related innovations. The site
                    features a section dedicated to the top-performing coins
                    from a certain period, emphasizing the significance of
                    staying updated with the behavior of trending
                    cryptocurrencies. It also includes inspirational quotes and
                    encourages visitors to become part of a community sharing
                    knowledge on this subject.
                    <br></br>
                    <br></br>
                    Technologies:
                    <ol>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Chart.js</li>
                      <li>Coin Gecko API</li>
                    </ol>
                  </p>
                  <a
                    href="https://dainty-horse-8dab40.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                  <br></br>
                  <a
                    href="https://github.com/carlospaz19/crypto_dashboard_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link
                  </a>
                </div>
                <div className="item" id="content-4">
                  <h2 className="tab-title tab-four">Restaurant Website</h2>
                  <p>
                    The website is about a brunch spot located in Mérida,
                    Yucatán. The site introduces the venue as an ideal
                    destination for brunch enthusiasts. It features an
                    interactive menu section, allowing visitors to explore
                    various culinary offerings. Additionally, the website
                    includes a section for viewing reservation lists, utilizing
                    Firebase technology to manage and display reservations. This
                    provides a seamless experience for customers looking to book
                    a visit to this popular dining location.
                    <br></br>
                    <br></br>
                    Technologies:
                    <ol>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Node.js</li>
                      <li>Vite</li>
                      <li>Google Firebase</li>
                    </ol>
                  </p>
                  <a
                    href="https://jocular-alfajores-666fd1.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                  <br></br>
                  <a
                    href="https://github.com/carlospaz19/firebase_restaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link
                  </a>
                </div>
                <div className="item" id="content-5">
                  <h2 className="tab-title tab-five">E-Commerce Website</h2>
                  <p>
                    The website is an online bakery that offers a comprehensive
                    digital shopping experience. The website features
                    user-friendly functionalities such as account login and
                    registration for customers. It includes an interactive menu
                    section where customers can browse through various bakery
                    items. Additionally, the site is equipped with a shopping
                    cart feature for convenient purchasing. To facilitate secure
                    online transactions, &quot;Master Baker&quot; integrates
                    PayPal&apos;s sandbox technology, providing users with a
                    safe and reliable payment option. This website seems to
                    combine traditional bakery offerings with modern e-commerce
                    conveniences.
                    <br></br>
                    <br></br>
                    Technologies:
                    <ol>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Node.js</li>
                      <li>Vite</li>
                      <li>Axios</li>
                      <li>Mongoose</li>
                      <li>Mongo Atlas</li>
                      <li>Sandbox Paypal</li>
                    </ol>
                  </p>
                  <a
                    href="https://effervescent-bunny-b19d9e.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                  <br></br>
                  <a
                    href="https://github.com/carlospaz19/masterBaker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
