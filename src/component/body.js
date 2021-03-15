import React, { Component } from "react";
import Text from "./text";
import Video from "./video";
import Image from "./image";
import Table from "./table";
import Email from "./email";
import Zoom from "./zoom-manager/zoom";

class Body extends Component {
  // body display content according to active tab num
  render() {
    var displayContent = () => {
      var activeTab = this.props.activeTab;
      if (activeTab === 1) {
        return <Text />;
      } else if (activeTab === 2) {
        return <Image />;
      } else if (activeTab === 3) {
        return <Video />;
      } else if (activeTab === 4) {
        return <Table />;
      } else if (activeTab === 5) {
        return <Email />;
      } else {
        return <Zoom />;
      }
    };
    return displayContent();
  }
}
export default Body;
