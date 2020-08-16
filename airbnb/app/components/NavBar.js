import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import { EvilIcons } from "@expo/vector-icons";

import styled from "styled-components";
import Colors from "../config/colors";

export const NavBar = ({ nav, title, action, onPress }) => {
  return (
    <Container>
      <Bar>
        <Back>
          <TouchableWithoutFeedback onPress={onPress}>
            <EvilIcons name={nav} size={30} />
          </TouchableWithoutFeedback>
        </Back>
        {title ? <Title>{title}</Title> : <Title></Title>}
        {action ? <Action>{action}</Action> : <Action></Action>}
      </Bar>
    </Container>
  );
};

export const NavBar2 = ({ nav, title, action, onPress }) => {
  return (
    <Container2>
      <Bar>
        <Back>
          <TouchableWithoutFeedback onPress={onPress}>
            <EvilIcons name={nav} size={30} />
          </TouchableWithoutFeedback>
        </Back>
        {title ? <Title>{title}</Title> : <Title></Title>}
        {action ? <Action>{action}</Action> : <Action></Action>}
      </Bar>
    </Container2>
  );
};

export const NolineNavBar = ({ nav, title, action, onPress }) => {
  return (
    <NolineContainer>
      <Bar>
        <Back>
          <TouchableWithoutFeedback onPress={onPress}>
            <EvilIcons name={nav} size={20} />
          </TouchableWithoutFeedback>
        </Back>
        {title ? <Title>{title}</Title> : <Title></Title>}
        {action ? <Action>{action}</Action> : <Action></Action>}
      </Bar>
    </NolineContainer>
  );
};

const Container = styled.View`
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.faintgray};
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.View`
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.faintgray};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const NolineContainer = styled.View`
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

const Back = styled.Text`
  width: 25%;
  padding-top: 18px;
`;

const Title = styled.Text``;

const Action = styled.Text`
  width: 25%;
`;
