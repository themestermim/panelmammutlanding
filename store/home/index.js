import { defineStore } from 'pinia';

export const useHome = defineStore('Home', {
    state: () => {
        return {
            activeProductTab: 'roof',
        }
    },
    actions: {
        toggleActiveTab(name) {
            this.activeProductTab = name;
        }
    },
})