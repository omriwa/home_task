import * as React from 'react';
import App from './App';
import ProgressBar from "./components/progressBar";

import * as renderer from 'react-test-renderer';

test("app render", () => {
    const app = renderer.create(<App />);
    //check render
    let tree = app.toJSON();
    expect(tree).toMatchSnapshot();
});

test("progress bar", () => {
    const progressBar = renderer.create(<ProgressBar progress={0} />);
    //check render
    let tree = progressBar.toJSON();
    expect(tree).toMatchSnapshot();
});

