import { isElement, isFunction, isString } from "../utils.js";
import Loader from "./Loader.js";

class UI {
    constructor() {
        this.setup();
    }

    setup() {
        if (document.readyState === "complete") {

            if (isFunction(this.onSetup)) {
                this.onSetup();
            }

            this.renderFields();
            this.addEvents();
            this.afterSetup();
        } else {
            if (document.readyState === "interactive") {
                this.loader = new Loader("#modal-loader");

                this.beforeSetup();
            }

            document.onreadystatechange = event => {
                this.setup();
            };
        }
    }

    beforeSetup() {
        this.loader.show();
    }

    afterSetup() {
        this.loader.hide();
    }

    renderFields() {

    }

    addEvents() {

    }


}

export default UI;
