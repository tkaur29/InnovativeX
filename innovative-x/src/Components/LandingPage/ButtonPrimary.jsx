import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ButtonPrimary.css';

const ButtonPrimary = (props) => {
  return (
    <Button className="header-cta" variant="secondary" size="lg">
      <span>{props.text}</span>
    </Button>
  );
};

export default ButtonPrimary;
