import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'rux-tab',
  styleUrl: 'rux-tab.scss',
  shadow: true,
})
export class RuxTab {

  @Prop({ mutable: true }) id: string = "";
  @Prop() selected: boolean = false;
  @Prop() disabled: boolean = false;
  //* Need to be able to change selected through clicks. 


//   @Event() tabClick: EventEmitter<Tab>;

//   tabClickHandler(tab: Tab){
//       this.tabClick.emit(tab);
//   }
//   @Listen('click', {target: 'window'})

//     handleClick(ev){
//         console.log('doc clicked', ev);
//     }



  render() {
    return (
      <Host>
        TEST
        <slot></slot>
      </Host>
    );
  }

}




/*

import { LitElement, html } from 'lit-element';

export class RuxTab extends LitElement {
  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflect: true,
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.selected = false;
    this.disabled = false;
    this.addEventListener('click', this.clickHandler);
  }

  clickHandler(e) {
    if (this.disabled) {
      e.stopImmediatePropagation();
    }
  }
  
  connectedCallback() {
    super.connectedCallback();

    // set the role to tab
    this.setAttribute('role', 'tab');

    if (this.parentElement.getAttributeNode('small')) {
      this.setAttribute('small', '');
    }
  }

*/