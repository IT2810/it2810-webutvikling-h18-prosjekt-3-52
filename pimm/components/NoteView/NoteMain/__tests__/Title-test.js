import React from 'react';
import 'react-native';
import Title from '../Title.js';
import renderer from 'react-test-renderer';


test('title renders correctly', () => {
  const titleRendered = renderer.create(<Title />).toJSON();
  expect(titleRendered).toMatchSnapshot();
  expect(titleRendered.type).toBe("View");
  expect(titleRendered.children[0].type).toBe("TextInput");
  expect(titleRendered.children[0].props.placeholder).toBe("Write title here");
  
});

test('Change title', ()=>{
	const title = renderer.create(<Title />).getInstance();
	expect(title.state.title).toBe("");
	title.changeTitle("Original");
	expect(title.state.title).toBe("Original");
});
