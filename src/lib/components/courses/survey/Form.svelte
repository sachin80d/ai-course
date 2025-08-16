<script>
    import StartForm from './StartForm.svelte';
    import FirstStep from './FirstStep.svelte';
	import InputField from './InputField.svelte';
	export let active_step;
	let formData = {
		name: '',
		surname: '',
		email: '',
		password: '',
		address: '',
		city: '',
		country: '',
		postcode: '',
		account_name: '',
		card_no: ''
	}
	
	const handleSubmit = () => {
		console.log("Your form data => ",formData)
	}

</script>

<form class="form-container" on:submit={handleSubmit}>
	{#if active_step == 'Info'}
        <FirstStep {formData}></FirstStep>
	{:else if active_step == 'Address'}
		<InputField label={'Address'} bind:value={formData.address}/>
		<InputField label={'City'} bind:value={formData.city}/>
		<InputField label={'Country'} bind:value={formData.country}/>
		<InputField label={'Postcode'} bind:value={formData.postcode}/>
	{:else if active_step == 'Payment'}
		<InputField label={'Account Name'} bind:value={formData.account_name}/>
		<InputField label={'Card No'} bind:value={formData.card_no}/>
	{:else if active_step == 'Confirmation'}
		<div class="message">
			<h2>Thank you for choosing us</h2>
			<button class="btn submit">Finish </button>
		</div>
	{/if}
</form>
