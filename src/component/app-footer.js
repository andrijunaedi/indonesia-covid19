class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
            }
            :host {
                color: white;
                text-align: center;
            }
            :host p {
                background-color: #343a40!important;
                padding: 25px;
            }
            :host a { 
                color: #007bff;
                text-decoration: none;
                background-color: transparent;
            }
            :host a:hover {
                text-decoration: underline;
            }
        </style>
            <p>Sumber data berasal dari API <a href="https://github.com/mathdroid/covid-19-api">mathdroid</a>
            <br>
            © 2020 <a href="https://github.com/andrijunaedi">Andri Junaedi</a></p>
        `;
    }
}

customElements.define('app-footer', AppFooter);