import Controller from './libs/Controller';
import _find from 'lodash/find';

export default class AppController extends Controller {
    constructor() {
        super();

        // Controller vars
        this.defaultAppTitle = document.querySelector('[js-title]').innerHTML;

        // DOM vars
        this.appTitle = document.querySelector('[js-title]');

        // Init calls
        this.bindEvents();
        this.init();
    }

    init() {

    }

    bindEvents() {
        // Array.from(document.querySelectorAll('[js-link]')).forEach((elt) => {
        //     elt.addEventListener('click', (e) => {
        //         this.setPage(e.target.getAttribute('js-link'));
        //         this.closeSideNav();
        //     });
        // });
    }
}