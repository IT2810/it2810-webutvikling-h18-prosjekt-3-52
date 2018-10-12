import React from 'react';
import 'react-native';
import SaveButton from '../SaveButton.js';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';


test('SaveButton renders correctly', () => {
  const sb = renderer.create(<SaveButton />).toJSON();
  expect(sb).toMatchSnapshot();
  expect(sb.type).toBe("View");
  expect(sb.children[0].type).toBe("View");
  expect(sb.children[0].props.accessibilityComponentType).toBe("button");
  
});

test('saving', ()=>{
	const sb = renderer.create(<SaveButton title="a" note="b" image="c" />).getInstance();
	const saveNote = jest.fn();
	saveNote()
	expect(saveNote).toHaveBeenCalled()
	expect(sb.saveNote()).toBeDefined();
	
	
	
	
});