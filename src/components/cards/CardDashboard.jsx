import React from "react";
import  {Card, Button}  from "react-bootstrap";
import logo from "../../images/logo.png";
import CardProject from "./../../images/CardProject.png";
import "../../styles/CardDashboard.css"

function CardDashboard() {
    return (
      <Card>
        <a href="">

        
        <Card.Img src={CardProject} />
        </a>
      </Card>
    );
  }
  
  export default CardDashboard;