import { Component, Host, h, Prop, Element, State, EventEmitter, Event, Watch } from '@stencil/core';

export interface MenuItem {
  id: string,
  label: string
} 

export interface Seperator{
  role: "separator"
}

@Component({
  tag: 'rux-pop-up-menu',
  styleUrl: 'rux-pop-up-menu.scss',
  shadow: true,
})
export class RuxPopUpMenu {

  left: number
  top: number

  @Element() el!: HTMLRuxPopUpMenuElement

  @State() _anchorEl: HTMLElement
  // @State() selected?: MenuItem

  /**
   * An array of objects that defines the pop up menu’s labels.
   * Note: when used in an Angular environment you may need to stringify the data property.
   */
  @Prop() data!: Array<MenuItem | Seperator>

  @Prop() anchorEl?: HTMLElement
  
  @Prop({reflect: true, mutable: true}) isOpen: boolean

  @Watch('isOpen')
  menuOpenChanged(newMenuOpenState: boolean, oldMenuOpenState: boolean) {
    if (newMenuOpenState !== oldMenuOpenState){
      if (newMenuOpenState){
        this._menuOpenHandler()
      } else {
        this._menuCloseHandler()
      }
    }
  }

  // /**
  //  * Lifecycle method fired when the menu enters.
  //  */
  // @Prop() onEnter?: Function

  // /**
  //  * Lifecycle method fired when the menu exits.
  //  */
  // @Prop() onExit?: Function

  @Event({composed: true,}) popUpMenuOpen: EventEmitter
  _menuOpenHandler() {
    this.popUpMenuOpen.emit()
  }

  @Event({composed: true,}) popUpMenuClose: EventEmitter
  _menuCloseHandler() {
    this.popUpMenuClose.emit()
  }

  connectedCallback() {
    if (!this.anchorEl) {
      this._anchorEl = this.el.parentElement.querySelector(`[aria-controls="${this.el.id}"]`);
      this._anchorEl.addEventListener('mousedown', this._handleClick);
    }
  }

  disconnectedCallback() {
    this._anchorEl.removeEventListener('mousedown', this._handleClick);
  }

  _setMenuPosition() {
    const menuBounds = this.el.getBoundingClientRect();
    const triggerBounds = this._anchorEl.getBoundingClientRect();
    const caret = parseInt(getComputedStyle(this.el, ':after').height);

    const padding = 16;

    this.left =
      menuBounds.width + triggerBounds.left - padding > window.innerWidth
        ? triggerBounds.right - menuBounds.width
        : triggerBounds.left - padding;

    this.top = triggerBounds.bottom + padding / 2 + caret / 2;

    if (menuBounds.height + triggerBounds.bottom + padding > window.innerHeight) {
      this.top = triggerBounds.top - menuBounds.height - caret;
      this.el.classList.add('from-top');
    } else {
      this.el.classList.remove('from-top');
    }

    this.el.style.left = `${this.left}px`;
    this.el.style.top = `${this.top}px`;

    const caretLeft = triggerBounds.left - this.left;
    this.el.style.setProperty('--caretLeft', `${caretLeft}px`);
  }

  _handleClick() {
    this.show();
  }

  _handleOutsideClick(e) {
    const target = e
        .composedPath()
        .find((element: HTMLElement) => element.id && element.id === this._anchorEl.getAttribute('aria-controls'));
    target ? this._anchorEl.addEventListener('mousedown', this._handleClick) : this.hide();
  }

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

  show() {
    this._setMenuPosition();
    this.isOpen = true;
    // if(this.onEnter){
    //   this.onEnter();
    // }

    const debounce = setTimeout(() => {
      window.addEventListener('resize', () => this._setMenuPosition());
      window.addEventListener('mousedown', this._handleOutsideClick);
      clearTimeout(debounce);
    }, 10);

    this._anchorEl.removeEventListener('mousedown', this._handleClick);

    // * Creates the menu items and attaches listeners. Not needed when using menu-item components
    // this._menuItems = this.shadowRoot.querySelectorAll('[role="menuitem"]');
    // this._menuItems.forEach((item) => {
    //   item.addEventListener('mouseup', this._handleMenuItemClick);
    // });
  }

  hide() {
    this.isOpen = false;
    // if(this.onExit){
    //   this.onExit();
    // }

    window.removeEventListener('mousedown', this._handleOutsideClick);
    window.removeEventListener('resize', this._setMenuPosition);

    // this._menuItems.forEach((item) => {
    //   item.removeEventListener('mouseup', this._handleMenuItemClick);
    // });

    this._anchorEl.addEventListener('mousedown', this._handleClick);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

// import { LitElement, html, css } from 'lit-element';

// export class RuxPopUpMenu extends LitElement {
//   static get properties() {
//     return {
//       data: {
//         type: Array,
//       },
//       selected: {
//         type: Object,
//       },
//       expanded: {
//         type: Boolean,
//         reflect: true,
//       },
//       _trigger: {
//         type: Object,
//       },
//       onPopUpMenuItemSelected: {
//         type: Function
//       },
//       onPopUpMenuExpandedChange: {
//         type: Function
//       }
//     };
//   }

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
