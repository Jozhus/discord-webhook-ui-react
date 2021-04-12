import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(message) {
    axios({
      method: "POST",
      url: "https://discord.com/api/webhooks/heh",
      data: {
        content: message
      }
    })
      .then(() => {
        toast.success("Message sent!");
      })
      .catch(() => {
        toast.error("Message failed to send!");
      })
  }

  render() {
    return (
      <React.Fragment>
        <Button
          onClick={() => { this.sendMessage("!vc say dragon") }}
        >
          Dragon
        </Button>
        <Button
          onClick={() => { this.sendMessage("!vc say left") }}
        >
          Left
        </Button>
        <Button
          onClick={() => { this.sendMessage("!vc say right") }}
        >
          Right
        </Button>
        <Button
          onClick={() => { this.sendMessage("!vc say bomb") }}
        >
          Bomb
        </Button>
        <Button
          onClick={() => { this.sendMessage("!vc say lasers") }}
        >
          Lasers
        </Button>
        <Button
          onClick={() => { this.sendMessage("!vc say touch") }}
        >
          Touch
        </Button>
        <Button
          onClick={() => { this.sendMessage("!vc say wew") }}
        >
          wew
        </Button>
      </React.Fragment>
    );
  }
}

export { App };
