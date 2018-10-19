import React from 'react';
import 'react-native';
import BackButton from '../BackButton.js';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';


test('BackButton renders correctly', () => {
  const bb = renderer.create(<BackButton />).toJSON();
  expect(bb).toMatchSnapshot();
  expect(bb.type).toBe("View");
  expect(bb.children[0].type).toBe("View");
  expect(bb.children[0].props.accessibilityComponentType).toBe("button");
  
});
