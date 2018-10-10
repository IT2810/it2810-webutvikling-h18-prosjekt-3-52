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

/*test('Props are sent', ()=>{ TODO: Flytt denne testen til App.
	const renderer = new ShallowRenderer();
	renderer.render(<NoteMain />);
	const result = renderer.getRenderOutput();
	expect(result.props.children[0].props.sendTitleUp).toBeDefined();
	expect(result.props.children[1].props.sendNoteUp).toBeDefined();
	expect(result.props.children[2].props.sendImageUp).toBeDefined();
	

});*/
