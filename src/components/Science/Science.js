import { Button, Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Science = () => {
  const [techs, setTechs] = useState([]);
  const url = "https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=e6f34f1fb00e47c98c55c5fffea4abd8"
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setTechs(data.articles))
  }, [])

  return (
    <div>
      {
        techs.map(tech => {
          console.log(tech)
          const { urlToImage, title, content, description } = tech;
          return <Jumbotron fluid>
            <Container>
              <Row >
                <Col xs={12} md={6}>
                  <img style={{ width: '100%', padding: '1rem 0' }} src={urlToImage} alt="" />
                </Col>
                <Col xs={12} md={6} className="d-flex flex-column justify-content-end">
                  <h5>{title}</h5>
                  <p>{description}</p>
                  <Button>Read more</Button>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        })
      }
    </div>
  );
};

export default Science;