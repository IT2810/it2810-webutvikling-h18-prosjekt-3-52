import React from 'react';
import 'react-native';
import NoteTopBar from '../NoteTopBar.js';
import renderer from 'react-test-renderer';

test('NoteTopBar renders correctly', ()=>{
    const ntb = renderer.create(<NoteTopBar />).toJSON();
    expect(ntb).toMatchSnapshot();
    expect(ntb.type).toBe("View");
    expect(ntb.children[0].type).toBe("View");
    expect(ntb.children[1].type).toBe("View");
});