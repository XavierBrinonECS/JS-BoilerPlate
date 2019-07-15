import { configure, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/theming';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  viewport: { viewports: newViewports },
});

addParameters({
  options: {
    theme: themes.dark,
  },
});

addDecorator(
  withInfo({
    inline: true,
  }),
);
addDecorator(withKnobs);
addDecorator(withA11y);
addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff'},
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

function loadStories() {
  require('../src/stories/Sample.stories');
  /** add new stories below */

}

configure(loadStories, module);
