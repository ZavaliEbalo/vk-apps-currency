import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = props => (
	<Panel id={id}>
		<PanelHeader>Text</PanelHeader>
    <Group>
      <Div>
        <Text weight="regular" style={{ marginBottom: 16 }}>Text regular</Text>
        <Text weight="medium" style={{ marginBottom: 16 }}>Text medium</Text>
        <Text weight="semibold">Text semibold</Text>
      </Div>
    </Group>
	</Panel>
);



export default Home;
