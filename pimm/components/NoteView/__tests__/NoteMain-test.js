import React from 'react';
import 'react-native';
import NoteMain from '../NoteMain.js';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';


test('NoteMain renders correctly', () => {
  const nm = renderer.create(<NoteMain />).toJSON();
  expect(nm).toMatchSnapshot();
  expect(nm.type).toBe("View");
  expect(nm.children[0].type).toBe("View");
  expect(nm.children[1].type).toBe("View");
  expect(nm.children[2].type).toBe("View");
  
});


