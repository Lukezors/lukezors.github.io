import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
    text-align: center;    
`

const SectionHeader = (props) => (
      <Header>
          {props.text}
      </Header>
);

export default SectionHeader;