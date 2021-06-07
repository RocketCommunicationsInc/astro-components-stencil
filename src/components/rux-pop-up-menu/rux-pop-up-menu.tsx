import { Component, Host, h, Prop } from '@stencil/core';

interface MenuItem {
  id: string,
  label: string
} 

interface Seperator{
  role: "separator"
}

@Component({
  tag: 'rux-pop-up-menu',
  styleUrl: 'rux-pop-up-menu.scss',
  shadow: true,
})
export class RuxPopUpMenu {
  /**
   * An array of objects that defines the pop up menu’s labels.
   * Note: when used in an Angular environment you may need to stringify the data property.
   */
  @Prop() data!: Array<MenuItem | Seperator>

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
