import { Row, Col } from "antd";

// Photo component displays a photo with its title, description and author in responsive design

function Photo({photo}) {
  return (
    <Row>
      <Col xs={{ flex: "100%" }} xl={{ flex: "50%" }}>
        <img src={photo?.urls?.regular} style={{ maxWidth: "100%" }} />
      </Col>
      <Col
        xs={{ flex: "100%" }}
        xl={{ flex: "50%" }}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>{photo?.alt_description || "Photo title placeholder"}</h2>
        <h3>Author: {photo?.user?.name || "Photo title placeholder"}</h3>
        <p>Description: {photo?.description || "Photo description placeholder"}</p>
      </Col>
    </Row>
  );
}

export default Photo;
