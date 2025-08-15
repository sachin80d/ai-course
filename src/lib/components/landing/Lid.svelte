<script lang="ts">
	import { Motion, MotionValue } from 'svelte-motion';

	export let scaleX: MotionValue<number>;
	export let scaleY: MotionValue<number>;
	export let rotate: MotionValue<number>;
	export let translate: MotionValue<number>;
	export let src: string | undefined = undefined;
</script>

<div class="relative [perspective:800px]">

	<Motion
		let:motion
		style={{
			scaleX: scaleX,
			scaleY: scaleY,
			rotateX: rotate,
			translateY: translate,
			transformStyle: 'preserve-3d',
			transformOrigin: 'top'
		}}
	>
		<div use:motion class="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2 top-0">
			<div class="absolute inset-0 rounded-lg bg-[#272729]" />
			{#if src}
				<img
					{src}
					alt="Aceternity Svelte Logo"
					class="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
				/>
			{/if}
		</div>
	</Motion>
</div>
