import { defineStore } from 'pinia';

export const useHome = defineStore('Home', {
    state: () => {
        return {
            activeProductTab: 'roof',
            productShowInfo: false,
        }
    },
    actions: {
        showMoreInfo() {
            this.productShowInfo = true;
        },
        toggleActiveTab(name) {
            this.activeProductTab = name;
            this.productShowInfo = false;
        }
    },
})