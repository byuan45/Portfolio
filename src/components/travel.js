import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Carousel, Tabs, Tab } from "react-bootstrap";
import AntFirst from "../travelImages/Antarctica/first.jpg";
import AntSecond from "../travelImages/Antarctica/second.JPG";
import AntThird from "../travelImages/Antarctica/third.jpg";
import AntForth from "../travelImages/Antarctica/forth.jpg";
import AntFifth from "../travelImages/Antarctica/fifth.jpg";
import AntSixth from "../travelImages/Antarctica/sixth.jpg";
import CosFirst from "../travelImages/Costa Rica/first.jpg";
import CosSecond from "../travelImages/Costa Rica/second.jpg";
import CosThird from "../travelImages/Costa Rica/third.jpg";
import CosForth from "../travelImages/Costa Rica/forth.jpg";
import ChiFirst from "../travelImages/Chile/first.jpg";
import ChiSecond from "../travelImages/Chile/second.jpg";
import ChiThird from "../travelImages/Chile/third.jpg";
import ChiForth from "../travelImages/Chile/forth.jpg";
import ChiFifth from "../travelImages/Chile/fifth.jpg";


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const highlighted = ["USA", "ATA", "CHL", "CRI", "MYS"];
const Travel = ({ setTooltipContent }) => {
  return (
    <div>
      <h1>Travel</h1>
      <p>Random paragraph</p>

      <ComposableMap
        viewBox="10 30 150 60"
        data-tip=""
        width={150}
        height={120}
        projectionConfig={{ scale: 20 }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted =
                highlighted.indexOf(geo.properties.ISO_A3) !== -1;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "red" : "grey"}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onClick={() => console.log(geo.properties.ISO_A3)}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      fill: "blue",
                      outline: "none",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <Tabs
        defaultActiveKey="Antarctica"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        <Tab eventKey="Antarctica" title="Antarctica">
          <Carousel
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              margin: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={AntFirst} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={AntSecond}
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={AntThird} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={AntForth} alt="Forth slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={AntFifth} alt="Fifth slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={AntSixth} alt="Sixth slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Tab>
        <Tab eventKey="Alaska" title="Alaska"></Tab>
        <Tab eventKey="Chile" title="Chile">
        <Carousel
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              margin: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={ChiFirst} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ChiSecond}
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={ChiThird} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={ChiForth} alt="Forth slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={ChiFifth} alt="Fifth slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Tab>
        <Tab eventKey="Costa Rica" title="Costa Rica">
          <Carousel
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              margin: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={CosFirst} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={CosSecond}
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={CosThird} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={CosForth} alt="Forth slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Tab>
        <Tab eventKey="Singapore" title="Singapore"></Tab>
      </Tabs>
    </div>
  );
};

export default memo(Travel);
