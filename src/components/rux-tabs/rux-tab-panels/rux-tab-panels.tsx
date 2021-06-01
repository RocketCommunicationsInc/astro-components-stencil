import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { RuxTabPanel } from '../rux-tab-panel/rux-tab-panel';

@Component({
    tag: 'rux-tab-panels',
    styleUrl: 'rux-tab-panels.scss',
    shadow: true
})
export class RuxTabPanels {

    @Prop() slottedChildren: Array<HTMLRuxTabPanelsElement> = [];
    @Element() el: HTMLElement;

    _getSlottedChildren(){
        const slot = this.el.shadowRoot.querySelector('slot');
        const childNodes = slot.assignedNodes({flatten: true});
        this.slottedChildren = Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);

    }
    connectedCallback(){
        this.el.setAttribute('style', 'position: relative; width: 100%;');
    }

    @Event({
        eventName: 'registerPanels'
    }) registerPanels: EventEmitter<HTMLRuxTabPanelsElement> //! Might need to be panel not panels
    _registerTabPanels(){
        this.slottedChildren.map(child => {
            console.log(child, "a child here inside of _registerTabPanels");
            this.registerPanels.emit(child);
        })
    }


    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}










/*
import { LitElement, html } from 'lit-element';

export class RuxTabPanels extends LitElement {
  constructor() {
    super();
  }

  firstUpdated() {
    this._registerTabPanels();
  }

  get _slottedChildren() {
    const slot = this.shadowRoot.querySelector('slot');
    const childNodes = slot.assignedNodes({flatten: true});
    return Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('style', 'position: relative; width: 100%;');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _registerTabPanels() {
    const _panels = this._slottedChildren;
    window.dispatchEvent(
      new CustomEvent('register-panels', {
        detail: { panels: _panels, for: this.getAttribute('aria-labelledby') },
      })
    );
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('rux-tab-panels', RuxTabPanels);

*/