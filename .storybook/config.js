import {addDecorator, configure} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';

const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

global.__PATH_PREFIX__ = '';
window.___navigate = pathname => {
  action('navigate')(pathname);
};

addDecorator(withInfo);
addDecorator(withKnobs);

configure(loadStories, module);
