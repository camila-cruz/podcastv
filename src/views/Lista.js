import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';

const Lista = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="PodcasTV 📺" titleBelow="Ouça seus podcasts favoritos na sua TV!"/>
		</Panel>
	)
});

export default Lista;
