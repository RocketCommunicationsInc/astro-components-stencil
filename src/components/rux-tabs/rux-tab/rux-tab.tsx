import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'rux-tab',
  styleUrl: 'rux-tab.scss',
  shadow: true,
})
export class RuxTab {

  @Prop({ mutable: true }) id: string = "";
  @Prop({ reflect: true }) selected: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  //* Need to be able to change selected through clicks. 

  @Element() el: HTMLElement;


  connectedCallback(){
    this.el.setAttribute('role', 'tab');
    this.el.addEventListener('click', this.clickHandler);

    if(this.el.parentElement.getAttributeNode('small')){
      this.el.setAttribute('small', '')
    }
  }

  //* Send the tab id when clicked in order to compare it with the panel id and show correct stuff
  @Event() sendId: EventEmitter<string>
  _sendTabId(tabId: string){
    console.log('sendId event trig w/ id of: ', tabId)
    this.sendId.emit(tabId)
  }

  clickHandler(e){
    if(this.disabled){
      e.stopImmediatePropagation();
    }
    this._sendTabId(this.id)

  } 



  render() {
    return (
      <Host onClick = {(e) => this.clickHandler(e)}>
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