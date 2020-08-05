import React from "react";
import { Row, Image } from "react-bootstrap";
import "./Picture.css";

const Picture = () => {
  return (
    <>
      <Image src="/assets/driversCourse.webp" className="first-image mt-5" />
      <Row className="driver-card d-none d-md-block">
        {/* <Card className="driver-card d-none d-md-block"> */}
        <h1 className="card-title">Learn on your schedule</h1>

        <h3 className="h-text">
          Anywhere, anytime.
          <br /> Prepare for your driving license today!
        </h3>
      </Row>
      <a href="#cards-part">
        <Image src="/assets/bottom.png" className="go" roundedCircle />
      </a>
    </>
  );
};

export default Picture;
