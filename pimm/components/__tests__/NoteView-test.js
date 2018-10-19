import React from 'react';
import 'react-native';
import NoteView from '../NoteView.js';
import renderer from 'react-test-renderer';

test('NoteView renders correctly', ()=>{
	const nv = renderer.create(<NoteView />).toJSON();
    expect(nv).toMatchSnapshot();
    expect(nv.type).toBe("View");
	expect(nv.children[0].type).toBe("View");
	expect(nv.children[1].type).toBe("View");
});