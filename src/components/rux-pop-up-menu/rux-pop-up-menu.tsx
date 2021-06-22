import { Component, Host, h, Prop, Element, State, EventEmitter, Event, Method } from '@stencil/core';


@Component({
  tag: 'rux-pop-up-menu',
  styleUrl: 'rux-pop-up-menu.scss',
  shadow: true,
})
export class RuxPopUpMenu {

  @Element() el!: HTMLRuxPopUpMenuElement

  @State() _anchorEl: HTMLElement
  
  @Prop({mutable: true}) triggerEl: HTMLElement

  /**
   * Element to anchor the menu to. If none is given the menu will anchor
   * to the trigger element where aria-controls === menu id
   */
  @Prop() anchorEl?: HTMLElement
  
  /**
   * Boolean which controls when to show the menu
   */
  @Prop({reflect: true, mutable: true}) open: boolean = false

  /**
   * Emitted when the menu is about to open.
   */
  @Event() menuWillOpen: EventEmitter<void>

  /**
   * Emitted when the menu is about to close
   */
  @Event() menuWillClose: EventEmitter<void>

  /**
   * Emitted when the menu is open.
   */
  @Event() menuDidOpen: EventEmitter<void>

  /**
   * Emitted when the menu is closed.
   */
  @Event() menuDidClose: EventEmitter<void>

  connectedCallback() {
    this._handleClick = this._handleClick.bind(this)
    this._handleOutsideClick = this._handleOutsideClick.bind(this)

    if (!this.anchorEl) {
      this._anchorEl = this.el.parentElement.querySelector(`[aria-controls="${this.el.id}"]`);
      this.triggerEl = this._anchorEl
      this.triggerEl.addEventListener('mousedown', this._handleClick);
    } else {
      this._anchorEl = this.anchorEl
      this.triggerEl = document.querySelector(`[aria-controls="${this.el.id}"]`);
      this.triggerEl.addEventListener('mousedown', this._handleClick)
    }
  }

  disconnectedCallback() {
    this.triggerEl.removeEventListener('mousedown', this._handleClick);
  }

  /**
   * Returns 'true' if the menu is open
   */
  @Method()
  async isOpen(): Promise<boolean> {
    return Promise.resolve(this.open)
  }

  /**
   * Opens the menu. If the menu is already open it returns 'false'.
   */
  @Method()
  async show(): Promise<boolean> {
    if (this.open){
      return Promise.resolve(false)
    }

    this._show()
    return Promise.resolve(true)
  }

  /**
   * Closes the menu. If the menu is already closed it returns 'false'.
   */
  @Method()
  async close(): Promise<boolean> {
    if (!this.open){
      return Promise.resolve(false)
    }

    this._hide()
    return Promise.resolve(true)
  }

  /**
   * Toggles the menu open or close. Will return 'true' on menu open and 'false' on menu close
   */
  @Method()
  async toggle(): Promise<boolean> {
    if (this.open) {
      this._hide()
      return false
    } else {
      this._show()
      return true
    }
  }

  _setMenuPosition() {
    const menuBounds = this.el.getBoundingClientRect();
    const anchorBounds = this._anchorEl.getBoundingClientRect();
    const caret = parseInt(getComputedStyle(this.el, ':after').height);
    let top: number
    let left: number

    const padding = 8;
             
    left =
      menuBounds.width + anchorBounds.left - padding > window.innerWidth
        ? anchorBounds.right - menuBounds.width - padding
        : anchorBounds.left + padding;

    top = anchorBounds.bottom + padding / 2 + caret / 2;

    if (menuBounds.height + anchorBounds.bottom + padding > window.innerHeight) {
      top = anchorBounds.top - menuBounds.height - caret;
      this.el.classList.add('from-top');
    } else {
      this.el.classList.remove('from-top');
    }

    this.el.style.left = `${left}px`;
    this.el.style.top = `${top}px`;

    const caretLeft = anchorBounds.left - left + padding;
    this.el.style.setProperty('--caretLeft', `${caretLeft}px`);
  }

  _handleClick() {
      this._show()
  }

  _handleOutsideClick(e: MouseEvent) {
    const target = e
        .composedPath()
        .find((element: HTMLElement) => element.id && element.id === this.triggerEl.getAttribute('aria-controls'));
    target ? this.triggerEl.addEventListener('mousedown', this._handleClick) : this._hide();
  }

  _show() {
    this.menuWillOpen.emit()
    this._setMenuPosition();
    this.open = true;

    const debounce = setTimeout(() => {
      window.addEventListener('resize', () => this._setMenuPosition());
      window.addEventListener('mousedown', this._handleOutsideClick);
      clearTimeout(debounce);
    }, 10);

    this._anchorEl.removeEventListener('mousedown', this._handleClick);

    this.menuDidOpen.emit()
  }

  _hide() {
    this.menuWillClose.emit()
    this.open = false;

    window.removeEventListener('mousedown', this._handleOutsideClick);
    window.removeEventListener('resize', this._setMenuPosition);

    this._anchorEl.addEventListener('mousedown', this._handleClick);
  }

  render() {
    return (
      <Host aria-hidden={!this.open}>
        <ul role="menu" aria-expanded={`${this.open}`}>
          <slot></slot>
        </ul>
        <slot name="menu-end"></slot>
      </Host>
    );
  }

}



//   constructor() {
//     super();

//     this.data = [];
//     this.selected = {};
//     this.expanded = false;

//     this.left = 0;
//     this.top = 0;

//     this._handleClick = this.handleClick.bind(this);
//     this._handleOutsideClick = this.handleOutsideClick.bind(this);
//     this._handleMenuItemClick = this.handleMenuItemClick.bind(this);
//   }

//   connectedCallback() {
//     super.connectedCallback();
//     this._trigger = this.parentElement.querySelector(`[aria-controls="${this.id}"]`);
//     this._trigger.addEventListener('mousedown', this._handleClick);
//   }

//   disconnectedCallback() {
//     this._trigger.removeEventListener('mousedown', this._handleClick);
//     super.disconnectedCallback();
//   }

//? Why does this exist? It doesn't appear to be called anywhere
//   findInObject(arr, key) {
//     arr.forEach((a) => {
//       if (a.key === key) {
//         a.selected = true;
//         this.found = a;
//       } else {
//         delete a.selected;
//         if (a.children) {
//           this.findInObject(a.children, key);
//         }
//       }
//     });

//     return this.found;
//   }

//   handleClick() {
//     this.show();
//   }

//   handleOutsideClick(e) {
//     const target = e
//         .composedPath()
//         .find((element) => element.id && element.id === this._trigger.getAttribute('aria-controls'));
//     target ? this._trigger.addEventListener('mousedown', this._click) : this.hide();
//   }

//   handleMenuItemClick(e) {
//     this.selected =  this.data.find((item) => item.id === e.currentTarget.dataset.key);
//     if(!!this.onPopUpMenuItemSelected){
//       this.onPopUpMenuItemSelected(this.selected);
//     }
//     this.dispatchEvent(
//         new CustomEvent('pop-up-menu-item-selected', {
//           detail: {
//             selected: this.selected,
//           },
//           bubbles: true,
//           composed: true,
//         })
//     );
//     this.hide();
//   }

//   show() {
//     this._setMenuPosition();
//     this.expanded = true;
//     if(!!this.onPopUpMenuExpandedChange){
//       this.onPopUpMenuExpandedChange(true);
//     }

//     const debounce = setTimeout(() => {
//       window.addEventListener('resize', () => this._setMenuPosition());
//       window.addEventListener('mousedown', this._handleOutsideClick);
//       clearTimeout(debounce);
//     }, 10);

//     this._trigger.removeEventListener('mousedown', this._handleClick);

//     this._menuItems = this.shadowRoot.querySelectorAll('[role="menuitem"]');
//     this._menuItems.forEach((item) => {
//       item.addEventListener('mouseup', this._handleMenuItemClick);
//     });
//   }

//   hide() {
//     this.expanded = false;
//     if(!!this.onPopUpMenuExpandedChange){
//       this.onPopUpMenuExpandedChange(false);
//     }

//     window.removeEventListener('mousedown', this._handleOutsideClick);
//     window.removeEventListener('resize', this);

//     this._menuItems.forEach((item) => {
//       item.removeEventListener('mouseup', this._handleMenuItemClick);
//     });

//     this._trigger.addEventListener('mousedown', this._handleClick);
//   }

//   _setMenuPosition() {
//     const menuBounds = this.getBoundingClientRect();
//     const triggerBounds = this._trigger.getBoundingClientRect();
//     const caret = parseInt(getComputedStyle(this, ':after').height);

//     const padding = 16;

//     this.left =
//       menuBounds.width + triggerBounds.left - padding > window.innerWidth
//         ? triggerBounds.right - menuBounds.width
//         : triggerBounds.left - padding;

//     this.top = triggerBounds.bottom + padding / 2 + caret / 2;

//     if (menuBounds.height + triggerBounds.bottom + padding > window.innerHeight) {
//       this.top = triggerBounds.top - menuBounds.height - caret;
//       this.classList.add('from-top');
//     } else {
//       this.classList.remove('from-top');
//     }

//     this.style.left = `${this.left}px`;
//     this.style.top = `${this.top}px`;

//     const caretLeft = triggerBounds.left - this.left;
//     this.style.setProperty('--caretLeft', `${caretLeft}px`);
//   }

//   render() {
//     const list = this.data.map((item, index) => {
//       return item.hasOwnProperty('role') && item.role === 'seperator' ? 
//         html`<li role="seperator"></li>` :
//         html`<li 
//                 data-key="${item.hasOwnProperty('id') ? item.id : index }" 
//                 role="menuitem" 
//                 tabindex="-1"
//               >
//                ${item.label}  
//              </li>`
//     });

//     return html`
//       <ul role="menu" aria-expanded="${this.expanded.toString()}">
//         ${list}
//       </ul>
//       <slot></slot>
//     `;
//   }

// }
