<div>
    <div class="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <div class={'flex w-full flex-col space-y-2'}>
            <Label htmlFor="firstname">First name</Label>
            <InputField id="firstname" placeholder="Tyler" type="text" />
        </div>
        <div class={'flex w-full flex-col space-y-2'}>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
        </div>
    </div>
    <div class={'mb-4 flex w-full flex-col space-y-2'}>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
    </div>
    <div class={cn('mb-4 flex w-full flex-col space-y-2')}>
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="••••••••" type="password" />
    </div>
    <div class={cn('mb-8 flex w-full flex-col space-y-2')}>
        <Label htmlFor="twitterpassword">Your twitter password</Label>
        <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
    </div>
</div>