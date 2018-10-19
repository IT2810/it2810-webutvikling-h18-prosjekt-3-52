import 'react-native';
import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

test('App renders correctly', ()=>{
    const a = renderer.create(<App />).toJSON();
    expect(a).toMatchSnapshot();

});


test('Props are sent', ()=>{
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.props.children.props.sendTitleUp).toBeDefined();
    expect(result.props.children.props.sendNoteUp).toBeDefined();
    expect(result.props.children.props.sendImageUp).toBeDefined();
    expect(result.props.children.props.changeView).toBeDefined();
    expect(result.props.children.props.sfl).toBeDefined();
    expect(result.props.children.props.changeOldTitle).toBeDefined();

});


test('changing states', ()=>{
    const a = renderer.create(<App />).getInstance();
    expect(a.state.title).toBe("");
    expect(a.state.note).toBe("");
    expect(a.state.image).toBe("");
    expect(a.state.view).toBe(true);
    expect(a.state.fromLoaded).toBe(false);
    expect(a.state.oldTitle).toBe("");
    const getNote = jest.fn();
    const getImage = jest.fn();
    const getTitle = jest.fn();
    const changeView = jest.fn();
    const fromLoadedF = jest.fn();
    const fromLoadedT = jest.fn();
    const changeOldTitle = jest.fn();
    a.getNote("test");
    a.getImage("test");
    a.getTitle("test");
    a.changeOldTitle("test");
    expect(a.state.note).toBe("test");
    expect(a.state.title).toBe("test");
    expect(a.state.image).toBe("test");
    expect(a.state.oldTitle).toBe("test");

    a.changeView();
    expect(a.state.view).toBe(false);

    a.fromLoadedT();
    expect(a.state.fromLoaded).toBe(true);

    a.fromLoadedF();
    expect(a.state.fromLoaded).toBe(false);


});