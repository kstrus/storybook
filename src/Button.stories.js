import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { color } from '@storybook/addon-knobs/react';
import Button from './Button';

storiesOf('Button', module)
    .addWithJSX(
        'with background',
        withInfo('description of the component')(() => <Button bg={color("bg", "orange")}>Hello world</Button>)
    )
    .addWithJSX('with background 2', () => <Button bg="green">Hello world 2</Button>);
