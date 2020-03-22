import React, { useState } from 'react';

import { Text } from '../containers/Languages';

export default function Explore() {
  // const [clickText, setClickText] = useState();

  // const handleClick = () => {
  //   setClickText(<Text tid="buttonClicked" />);
  // }

  return (
    <div>
      <h1><Text tid="exploreHeader" /></h1>
      <p><Text tid="welcomeDescription" /></p>
    </div>
  );
}