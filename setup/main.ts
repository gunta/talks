import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app }) => {
    // Register the 21st.dev toolbar wrapper globally
    // Use dynamic import to avoid type issues
    import('../components/TwentyFirstToolbarWrapper.vue').then((module) => {
        // @ts-ignore - Type mismatch with Slidev's component registration
        app.component('TwentyFirstToolbarWrapper', module.default)
    })
}) 