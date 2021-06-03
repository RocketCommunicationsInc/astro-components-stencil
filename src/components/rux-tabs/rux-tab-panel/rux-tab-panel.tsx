import { Component, Host, h, Element } from '@stencil/core';

@Component({
    tag: 'rux-tab-panel',
    styleUrl: 'rux-tab-panel.scss',
    shadow: true
})
export class RuxTabPanel{

@Element() el: HTMLElement

connectedCallback(){
        console.log('callback on panel')
        this.el.setAttribute('role', 'tabpanel');
    }

    componentWillLoad(){
        console.log('component will load')
    }

    render(){
        return(
            <Host>
                <slot></slot>
            </Host>
        )
    }
}




/*


import { LitElement, html } from 'lit-element';


 export class RuxTabPanel extends LitElement {
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute('role', 'tabpanel');
    }
  
    render() {
      return html`
        <style>
          :host {
            display: block;
            position: relative;
            visibility: visible;
            z-index: 1;
          }
          :host(.hidden) {
            position: absolute;
            visibility: hidden;
            z-index: -1;
          }
        </style>
        <slot></slot>
      `;
    }
  }
  
  customElements.define('rux-tab-panel', RuxTabPanel);
  

*/