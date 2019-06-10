import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
`;

const ListItem = styled.li`
  flex-grow: 1;
  flex-basis: 30%;
  margin: 10px;
`;

class BulletListBlock extends React.Component {
  render() {
    const { text, items } = this.props;
    return (
      <React.Fragment>
        <SectionHeader text={text} />
        <Container>
          {items.map(function(name, index) {
            return <ListItem key={index}>{name}</ListItem>;
          })}
        </Container>
      </React.Fragment>
    );
  }
}

export default BulletListBlock;
