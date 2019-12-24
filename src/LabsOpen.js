import React, { Component } from "react";
import axios from "axios";
import { Card, CardColumns, Container } from "react-bootstrap";
// import './CardStyle.css';
// import api from '../../utils/ApiFunctions';

// https://stackoverflow.com/questions/40988238/sending-the-bearer-token-with-axios
// https://www.andreasreiterer.at/rest-api-react-component/

class LabsOpen extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    const url = "https://api.labstats.com/schedules";
    const token = "6b3578f6-52a3-4ea6-b623-715c226307ad";
    const Auth = "Bearer ".concat(token);

    var config = {
      headers: {
        Authorization: Auth
      }
    };

    axios.get(url, config).then(
      result => {
        this.setState({ isLoaded: true, items: result.data });
      },
      // Note: it's important to handle errors here. Instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({ isLoaded: true, error });
      }
    );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="text-center">Loading...</div>;
    } else {
      //   console.log(typeof items);
      //   console.log(items);

      const check_open = info => {
        console.log("Inside check_open");
        console.log(info.monday.time_blocks[0].start_time.hour);
      };

      const labName = items.map(info => (
        <div key={info.id}>
          <Card className="mb-4 card-body-height">
            <Card.Header className="text-center">{info.name}</Card.Header>
            <Card.Text className="ml-4 mt-3">{info.description}</Card.Text>

            {/* Help Needed Below Here */}

            {console.log(info.monday.day_of_week)}

            {/* {check_open(info)} */}

            {/* {console.log(info.monday.time_blocks[0].start_time.hour)} */}

            <Card.Text className="ml-4 mt-3">
              {info.monday.day_of_week}
            </Card.Text>

            {/* Help Needed Above Here */}
          </Card>
        </div>
      ));

      return (
        <div className="container">
          <h1 className="text-center mt-3 mb-3">Labs</h1>
          <Container>
            <CardColumns>{labName}</CardColumns>
          </Container>
        </div>
      );
    }
  }
}

export default LabsOpen;
