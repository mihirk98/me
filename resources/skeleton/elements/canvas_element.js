class CanvasEl extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const style = document.createElement("style");

    style.textContent = `
        canvas-element {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* portrait */
            width: 95vw;
            height: 95vw;
        }
            
        @media (orientation: landscape) {
            canvas-element {
                width: 80vh;
                height: 80vh;
            }
        }

        canvas-element img {
          object-fit: contain;
        }
    `;

    this.appendChild(style);
  }
}

customElements.define("canvas-element", CanvasEl);
