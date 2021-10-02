'use strict';

class CustomNav {
    #rootEl;

    static NAV_CLASS = 'nav-item';
    static TITLE_CLASS = 'nav-title';
    static CONTENT_CLASS = 'nav-body';
    static CONTENT_CLASS_OPEN = 'nav-body-open';

    constructor(rootEl) {
        this.#rootEl = rootEl;

        this.assignClasses();
        this.assignEvents();
    }
    assignClasses() { 

        const navItems = this.#rootEl.children

        for(let itemEl of navItems) {
            const [titleEl, contentEl] = itemEl.children;

            itemEl.classList.add(CustomNav.NAV_CLASS);
            titleEl.classList.add(CustomNav.TITLE_CLASS);
            contentEl.classList.add(CustomNav.CONTENT_CLASS);
        }
    }

    assignEvents() {
        this.#rootEl.addEventListener ('click', (e) => this.onRootelclick(e));
    }

    onRootelclick(e) {
        if (e.target.classList.contains(CustomNav.TITLE_CLASS)) {
            const titleEl = e.target;
            const contentEl = this.findContent(titleEl);
            const openEl = this.findOpenClass();

            if (openEl && openEl !== contentEl) {
                this.hideContent(openEl);
            }

            this.toggleContent(contentEl);
        }
    }

    toggleContent(el) {
        el.classList.toggle(CustomNav.CONTENT_CLASS_OPEN);
    }

    findOpenClass() {
        return this.#rootEl.querySelector('.' + CustomNav.CONTENT_CLASS_OPEN);
    }

    hideContent(el) {
        el.classList.remove(CustomNav.CONTENT_CLASS_OPEN);
    }

    findContent (el) {
        const itemEl = el.closest('.' + CustomNav.NAV_CLASS);

        return itemEl.querySelector('.' + CustomNav.CONTENT_CLASS);
    }
}

const customNavEl = document.querySelector('#container');

new CustomNav(customNavEl);


