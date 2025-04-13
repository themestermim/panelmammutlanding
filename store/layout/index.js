import { defineStore } from 'pinia';

export const useLayout = defineStore('Layout', {
    state: () => {
        return {
            isMenuOpen: false,
            isMenuDropdownOpen: false,
        }
    },
    actions: {
        toggleDropDown() {
            this.isMenuDropdownOpen = !this.isMenuDropdownOpen;
        },
        openDropDown() {
            this.isMenuDropdownOpen = true;
        },
        closeDropDown() {
            this.isMenuDropdownOpen = false;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
    },
})