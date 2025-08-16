<script lang="ts">
	import Form from './survey/Form.svelte';
	import ProgressBar from './survey/ProgressBar.svelte';
	let steps = ['Info', 'Address', 'Payment', 'Confirmation'], currentActive = 1;
    let progressBar: InstanceType<typeof ProgressBar>;
	
	const handleProgress = (stepIncrement: number) => {
		progressBar.handleProgress(stepIncrement)
	}
	
</script>

<section class="horizontal-card relative flex flex-col w-[100vw] mt-40 pb-10">
    <ProgressBar {steps} bind:currentActive bind:this={progressBar}/>
		
    <Form active_step={steps[currentActive-1]}/>

    <div class="step-button">
        <button class="btn" on:click={() => handleProgress(-1)} disabled={currentActive == 1}>Prev</button>
        <button class="btn" on:click={() => handleProgress(+1)} disabled={currentActive == steps.length}>Next</button>
    </div>		

</section>
