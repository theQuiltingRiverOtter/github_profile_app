import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyNavBar({ getUserData, handleChange, handleSubmit }) {





  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary justify-content-evenly">
      <Form.Select onChange={getUserData} className="w-25" aria-label="Default select example">
        <option value="None">Select Username</option>
        <option value="theQuiltingRiverOtter">Megan Buck</option>
        <option value="hfilbin10">Halsey Filbin</option>
        <option value="PradoJohn">John Prado</option>
        <option value="seanmac-dev">Sean McCarthy</option>
        <option value="BDubOne">Bryan Bartell</option>
        <option value="chardy0919">Cody Hardy</option>
        <option value="annascriv">Anna Scriven</option>
        <option value="katme2006">Kate Fischer</option>
        <option value="mitch1625">Eric Mitchell</option>
        <option value="Mlew512">Matthew Lewis</option>
        <option value="jminchew97">Joshua Minchew</option>
        <option value="CustomDesignBuildStudios">Michael Termotto</option>
        <option value="Jkim1122">Josh Kim</option>
        <option value="Claireincode">Claireese Underwood</option>
        <option value="Antq20">Anthony Quinones</option>
        <option value="matthew-peterson-39">Matthew Peterson</option>
        <option value="kendrajmoore">Kendra Moore</option>
        <option value="masonlee06">Mason Dykstra</option>
        <option value="andrew-hagstrom">Andrew Hagstrom</option>
      </Form.Select>
      <Navbar.Brand className="fs-2" href="#home">Code Platoon GitHub Profiles</Navbar.Brand>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={handleChange}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default MyNavBar;