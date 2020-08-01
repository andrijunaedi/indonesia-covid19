class AppBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar bg-dark d-flex justify-content-center">
            <span class="navbar-title">Data Covid-19</span>
        </nav>
        `;
    }
}

customElements.define("app-bar", AppBar);