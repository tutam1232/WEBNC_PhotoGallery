import { Row, Col, Card, Image } from "antd";
import { Link } from "react-router-dom";
import RouterUrl from "../const/Router";
const { Meta } = Card;

// PhotoGallery component is a grid of photos, apply responsive design using Row and Col from antd

function PhotoGallery({ photos }) {
  return (
    <Row gutter={[10, 10]}>
      {photos.map((photo, index) => {
        return (
          <Col
            key={index}
            xs={{ flex: "100%" }}
            sm={{ flex: "50%" }}
            md={{ flex: "40%" }}
            xl={{ flex: "20%" }}
          >
            <Link to={RouterUrl.PHOTO.replace(":id", photo?.id)}>
              {/* <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0.5vw"}}>
                    <Image src={photo?.urls?.thumb} preview={false}/>
                    <h5>{photo?.user?.name}</h5>
                </div> */}
              <Card
                hoverable
                cover={<Image src={photo?.urls?.thumb} preview={false} />}
              >
                <Meta title={photo?.user?.name}></Meta>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}

export default PhotoGallery;
