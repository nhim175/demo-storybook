import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import WeeklySongListItem from '../src/components/WeeklySongListItem';

storiesOf('WeeklySongListItem', module)
  .add(
    'default',
    () => (
      <WeeklySongListItem
        order="01"
        title="Em Không Thể"
        singer="Tiên Tiên, Touliver"
        viewCount={3000}
      />
    )
  );
