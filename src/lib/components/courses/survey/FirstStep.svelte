<script lang="ts">
    import InputField from './InputField.svelte';
    export let formData: any;
</script>



<div class="form-container">
        <InputField label={'Name'} bind:value={formData.name}/>
		<InputField label={'Surname'} bind:value={formData.surname}/>
		<InputField label={'Email'} bind:value={formData.email}/>
		<InputField type={'password'} label={'Password'} bind:value={formData.password}/>
</div>