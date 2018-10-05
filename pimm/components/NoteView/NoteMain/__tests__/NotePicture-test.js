import React from 'react';
import 'react-native';
import NotePicture from '../NotePicture.js';
import renderer from 'react-test-renderer';

test('NotePicture renders correctly', ()=>{
	const np = renderer.create(<NotePicture />).toJSON();
    expect(np).toMatchSnapshot();
    expect(np.type).toBe("View");
	expect(np.children[0].props.accessibilityComponentType).toBe("button");
	expect(np.children[1].type).toBe("View");
	expect(np.children[1].children[0].type).toBe("Image");
});

test('setting image source', ()=>{
	const np = renderer.create(<NotePicture />).getInstance();
	expect(np.state.image).toBe(null);
	np.setState({image: "/data/user/0/host.exp.exponent/cache/cropped1814158652.jpg"});
	expect(np.state.image).toBe("/data/user/0/host.exp.exponent/cache/cropped1814158652.jpg");
});