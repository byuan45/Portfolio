import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Carousel } from "react-bootstrap";
import First from "../travelImages/Antarctica/first.jpg";
import Second from "../travelImages/Antarctica/second.jpg";
import Third from "../travelImages/Antarctica/third.jpg";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const highlighted = ["LBR", "RUS"];
const Travel = ({ setTooltipContent }) => {
  return (
    <div>
      <h1>Intresting Title</h1>
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

      <Carousel
       style={{ height: "500px", width: "500px", margin: 0 }}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={First} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Second} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Third} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default memo(Travel);
