declare module 'svelte-motion' {
    import type { SvelteComponentTyped } from 'svelte';
    
    interface MotionParams {
        element?: HTMLElement | SVGElement;
        initial?: any;
        animate?: any;
        transition?: any;
        variants?: any;
        isSVG?: boolean;
    }
    
    export class Motion extends SvelteComponentTyped<MotionParams> {}
} 