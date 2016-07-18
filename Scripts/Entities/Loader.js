import { isString, isElement } from "../utils.js";

class Loader {
    constructor(loader) {
        if (isElement(loader)) {
            this.element = loader;
        } else if (isString(loader)) {
            let element = document.querySelector(loader);

            if (!isElement(element)) {
                throw new Error(`invalid constructor argument loader \"${loader}\"`);
            }

            this.element = element;
        }
    }

    isActive() {
        return (this.element.classList.contains("active"));
    }

    show() {
        if (!this.isActive()) {
            this.element.classList.add("active");
        }
    }

    hide() {
        if (this.isActive) {
            this.element.classList.remove("active");
        }
    }
}

export default Loader;
