<template>
	<v-card outlined>
		<v-tabs>
			<v-tab>{{ $t('panel.settingsListItems.spindleRPM') }}</v-tab>
			<v-tab-item class="px-3">
				<list-editor itemKey="spindleRPM"></list-editor>
			</v-tab-item>
		</v-tabs>
	</v-card>
</template>

<script>
'use strict'

export default {
	// required for v-tabs to work properly
}
</script>
