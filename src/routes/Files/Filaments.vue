
<template v-if=isFFF()>
	<v-row>
		<v-col>
			<filament-file-list></filament-file-list>
		</v-col>
	</v-row>
</template>

<script>
'use strict'

import { registerRoute } from '..'

import { mapState } from 'vuex'
import { MachineMode } from '../../store/machine/modelEnums.js';


export default {
	computed: {
		...mapState('machine/model', {
			machineMode: state => state.state.machineMode
	})},

	isFFF() {
		return !this.machineMode || (this.machineMode === MachineMode.fff);
	},

	install() {
		// Register a route via Files -> Filaments
		registerRoute(this, {
			Files: {
				Filaments: {
				icon: 'mdi-radiobox-marked',
				caption: 'menu.files.filaments',
				path: '/Files/Filaments',
				// FIXME. This does not work as it should. Adding a ! changes this to show filaments. removing it removes Filaments. But it should occur automatically
				condition: () => !(this.machineMode === MachineMode.fff) // This needs to be fixed as it doesn't work as it should.
				}
			}
		});
	}
}
</script>
