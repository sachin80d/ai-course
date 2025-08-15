<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import Card from "$lib/components/ui/card/card.svelte";
    import CardContent from "$lib/components/ui/card/card-content.svelte";
    import CardDescription from "$lib/components/ui/card/card-description.svelte";
    import CardFooter from "$lib/components/ui/card/card-footer.svelte";
    import CardHeader from "$lib/components/ui/card/card-header.svelte";
    import CardTitle from "$lib/components/ui/card/card-title.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Label from "$lib/components/ui/label/label.svelte";

    export let showModal = false;
</script>

{#if showModal}
<Card class="relative w-[350px] overflow-hidden">
    <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
    </CardHeader>
    <CardContent>
        <form>
            <div class="grid w-full items-center gap-4">
                <div class="flex flex-col space-y-1.5">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div class="flex flex-col space-y-1.5">
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" />
                </div>
            </div>
        </form>
    </CardContent>
    <CardFooter class="flex justify-between">
        <Button variant="outline">Register</Button>
        <Button>Login</Button>
    </CardFooter>
</Card>
{/if}

