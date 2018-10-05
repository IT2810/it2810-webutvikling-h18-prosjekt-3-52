import React from 'react';
import 'react-native';
import NoteText from '../NoteText.js';
import renderer from 'react-test-renderer';


test('NoteText renders correctly', () => {
  const titleRendered = renderer.create(<NoteText />).toJSON();
  expect(titleRendered).toMatchSnapshot();
  expect(titleRendered.type).toBe("View");
  expect(titleRendered.children[0].type).toBe("TextInput");
  expect(titleRendered.children[0].props.placeholder).toBe("Write note here...");
  
});

test('Change note', ()=>{
	const nt = renderer.create(<NoteText />).getInstance();
	expect(nt.state.note).toBe("");
	nt.changeNote("Original");
	expect(nt.state.note).toBe("Original");
});
