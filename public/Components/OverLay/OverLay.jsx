import React from 'react';
import './OverLay.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { HoverNavBar } from '../Navbar/Navbar';
const OverLay = () => {
  return (
    <div className="Overlay" id="myNav">
      <div className="Overlay-content">
        <Accordion defaultActiveKey="0" flush alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="AccdHeader">Phones</span>
            </Accordion.Header>
            <Accordion.Body>
              <HoverNavBar
                phantom=" "
                ButtonTitle="All Models"
                ButtonTitle2="Pare Models"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="AccdHeader">Laptops</span>
            </Accordion.Header>
            <Accordion.Body>
              <HoverNavBar
                Laptop=" "
                ButtonTitle="All Models"
                ButtonTitle2="Pare Models"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <span className="AccdHeader">Accessories</span>
            </Accordion.Header>
            <Accordion.Body>
              <HoverNavBar
                Accessories=" "
                ButtonTitle="All Models"
                ButtonTitle2="Pare Models"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <span className="AccdHeader">Stores</span>
            </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <span className="AccdHeader">Community</span>
            </Accordion.Header>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default OverLay;
