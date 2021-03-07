import { Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Health = () => {
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=health&freshness=Day&textFormat=Raw&safeSearch=Off", {
      "method": "GET",
      "headers": {
        "x-bingapis-sdk": "true",
        "x-rapidapi-key": "b7fc677213msh88b7b069d11ddecp150bfejsnb370d83a4346",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
      }
    })
      .then(res => res.json())
      .then(data => setTechs(data.value))
  }, [])

  return (
    <div>
      {
        techs.map((tech, idx) => {
          const { name, url, description } = tech;
          return (
            <div key={idx}>
              <Jumbotron fluid>
                <Container>
                  <Row >
                    <Col xs={12} md={6} className='text-center'>
                      <img style={{ width: '50%', padding: '1rem 0' }} src='' alt="" />
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-end">
                      <h5>{name}</h5>
                      <p>{description}</p>
                      <a href={url} className="btn btn-dark">Read more</a>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </div>)
        })
      }
    </div>
  );
};

export default Health;