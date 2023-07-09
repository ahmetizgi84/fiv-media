import MainLayout from "@/layout/MainLayout";
import { Col, Row, Typography, Space } from "antd";

const { Title, Link } = Typography;

const Home = () => {
  return (
    <MainLayout>
      <Hero />

      <Benefits />

      <div
        className="bg-pattern bg-img"
        data-background="img/graph.png"
        style={{ backgroundImage: "url('img/graph.png')" }}
      ></div>
    </MainLayout>
  );
};

export default Home;

function Hero() {
  return (
    <section style={{ marginTop: 120 }}>
      <Row>
        <Col span={18} offset={3}>
          <Row>
            <Col span={18}>
              <div className="caption">
                <h1>
                  High End <br /> <span className="stroke">Creative</span>{" "}
                  Agency
                </h1>

                <Row style={{ marginTop: 30 }}>
                  <Col span={9} offset={2}>
                    <div className="text">
                      <p>
                        Through our years of experience, we've also learned that
                        while each channel has its own set of advantages.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col span={6}>{/* <h3>FivMedia</h3> */}</Col>
          </Row>

          <div className="main-img">
            <img src="img/14.jpeg" alt="" />
          </div>
        </Col>
      </Row>
    </section>
  );
}

function Benefits() {
  return (
    <section style={{ marginTop: 140 }}>
      <Row>
        <Col span={18} offset={3}>
          <Row>
            <Col span={8}>
              <Title level={5} className="dot-titl-non">
                OUR BENEFITS
              </Title>

              <Title level={2} style={{ marginTop: 0 }}>
                Our Team of Dedicated Digital Professionals.
              </Title>
            </Col>
            <Col span={8} offset={8}>
              <div className="text">
                <p>
                  Through our years of experience, we’ve also learned that while
                  each channel has its own set of advantages, they all work best
                  when strategically paired with other channels.
                </p>
              </div>
              <div className="text">
                <div
                  className="vew-all mt-50 ml-30 wow fadeIn"
                  data-wow-delay=".8s"
                >
                  <Link
                    onClick={(e) => e.preventDefault()}
                    href="blog-classic.html"
                  >
                    <Space>
                      View All Our News
                      <span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </Space>
                  </Link>
                </div>
              </div>
            </Col>
            <Col span={14}>
              <div className="imago">
                <img src="img/1.jpeg" alt="" />
              </div>
            </Col>
            <Col span={10}>
              <Title level={2} style={{ marginTop: 0, marginLeft: "1rem" }}>
                Unlock Revenue Growth for Your Business.
              </Title>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "32px",
                  marginLeft: "1rem",
                  marginTop: "4rem",
                }}
              >
                <div style={{ width: "50px" }}>
                  <img
                    src="img/0.png"
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <Title level={5} style={{ marginLeft: "1rem" }}>
                  High Standart
                </Title>
              </div>

              <div className="text" style={{ marginLeft: "1rem" }}>
                <p>
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "32px",
                  marginLeft: "1rem",
                  marginTop: "4rem",
                }}
              >
                <div style={{ width: "50px" }}>
                  <img
                    src="img/2.png"
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <Title level={5} style={{ marginLeft: "1rem" }}>
                  Ease of Communication
                </Title>
              </div>

              <div className="text" style={{ marginLeft: "1rem" }}>
                <p>
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}
