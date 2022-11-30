import React from "react";
import { Card, Col, Row } from "antd";
import Charat from "../../components/Charat";

const Dashboard = () => {
  return (
      <div>
          <Row  gutter={[13,14]}>

              <Col sm={12} md={8} xl={4} lg={6}>
                  <Card className="statistics-card">
                      <div className="card-wrapper">
                          <h1 className="number">50</h1>
                          <span className="highlighter green" />
                      </div>
                  </Card>
              </Col>

              <Col sm={12} md={8} xl={4}  lg={6}>
                  <Card className="statistics-card">
                      <div className="card-wrapper">
                          <h1 className="number">50</h1>
                          <span className="highlighter white" />
                      </div>
                  </Card>
              </Col>{" "}
              <Col sm={12} md={8} xl={4} lg={6}>
                  <Card className="statistics-card">
                      <div className="card-wrapper">
                          <h1 className="number">50</h1>
                          <span className="highlighter red" />
                      </div>
                  </Card>
              </Col>{" "}
              <Col sm={12} md={8} xl={4} lg={6}>
                  <Card className="statistics-card">
                      <div className="card-wrapper">
                          <h1 className="number">50</h1>
                          <span className="highlighter green" />
                      </div>
                  </Card>
              </Col>{" "}
              <Col sm={12} md={8} xl={4} lg={6}>
                  <Card className="statistics-card">
                      <div className="card-wrapper">
                          <h1 className="number">50</h1>
                          <span className="highlighter white" />
                      </div>
                  </Card>
              </Col>{" "}
              <Col sm={12} md={8} xl={4} lg={6}>
                  <Card className="statistics-card">
                      <div className="card-wrapper">
                          <h1 className="number">50</h1>
                          <span className="highlighter red" />
                      </div>
                  </Card>
              </Col>
          </Row>
          <br/>
          <br/>
          {/*<Charat/>*/}
      </div>

  );
};

export default Dashboard;
