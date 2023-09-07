import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    review: {
      name: "",
      rate: "",
      comment: "",
      idBook: "",
    },
  };
  handleChange = (propertyName, propertyValue) => {
    this.setState({ review: { ...this.state.review, [propertyName]: propertyValue } });
  };
  render(prop) {
    return (
      <Card>
        <Card.Img variant="top" src={prop.book.img} height={300} className="object-fit-cover" />
        <Card.Body>
          <Card.Title className="noCapo">{prop.book.title}</Card.Title>
          {/* <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name..."
                value={this.state.review.name}
                onChange={(event) => this.handleChange("name", event.target.value)}
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select"
              value={this.state.review.rate}
              onChange={(event) => this.handleChange("rate", event.target.value)}
            >
              <option value="">rate us...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.review.comment}
                onChange={(event) => this.handleChange("comment", event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form> */}
        </Card.Body>
      </Card>
    );
  }
  //   console.log(prop);
}
export default SingleBook;
