import { Component, Host, h, Prop, Element, Listen } from '@stencil/core';
import { RuxTab } from './rux-tab/rux-tab';
import { RuxTabPanels } from './rux-tab-panels/rux-tab-panels'
import { RuxTabPanel } from './rux-tab-panel/rux-tab-panel';


@Component({
  tag: 'rux-tabs',
  styleUrl: 'rux-tabs.scss',
  shadow: true,
})



export class RuxTabs {

  @Prop({ mutable: true }) id: string = "";
  @Prop() small: boolean = false;
  //? This might need to be <ruxtabpanel> 
  @Prop() _panels: Array<RuxTabPanel> = []
  @Prop() _panelsGroup: string = '';
  @Prop() _tabs: Array<HTMLRuxTabElement> = [];

  @Element() host: HTMLElement;

  @Listen('registerPanels')
  handleListen(e){
    this._registerPanels(e);
  }

  connectedCallback(){
    // window.addEventListener('register-panels', this._registerPanels);
    this.host.addEventListener('click', this._onClick);
    //build tabs arr
    this._addTabs();
    console.log(this._tabs, 'tabs here');
  }

  _addTabs(){
    this._tabs = Array.from(this.host.querySelectorAll('rux-tab'));
    //get all id's from tabs rendered 
  }

  _registerPanels(e) {
    if (e.detail.for === this.host.getAttribute('id')){
      this._panels = Array.from(e.detail.panels);
    }
  }

  _onClick(e) {
    if (e.target.getAttribute('role') === 'tab' && e.target.getAttribute('disabled') === null) {
      this._setTab(e.target);
    }
  }

  _reset() {
    // hide everything
    this._tabs.forEach((tab) => (tab.selected = false));
    //* classLIst on rux-tab-panel is an array of strings.
    this._panels.forEach((panel) => panel.classes.push('hidden'));
  }

  //! Error on tab click, this._setTab is not a funciton
  _setTab(selectedTab) {
    this._reset();

    // find the panel whose aria-labeldby attribute matches the tab’s id
    const selectedPanel = this._panels.find(
        (panel) => panel.el.getAttribute('aria-labelledby') === selectedTab.getAttribute('id')
    );

    if (selectedTab) selectedTab.selected = true;
    //* Find the index in the classList arr where 'hidden' is, remove it. May be a more optimal way to do this.
    let index = selectedPanel.classes.indexOf('hidden');
    if (selectedPanel) selectedPanel.classes.splice(index);
  }

  render() {
    return (
      <Host>
        
       
        <slot></slot>
      </Host>
    );
  }

}

//rux-tabs is a group/list of tabs
//has attributes of id and //? role? 



/*



import { LitElement, html } from 'lit-element';
import { RuxTab } from './rux-tab.js';
import { RuxTabPanels } from './rux-tab-panels.js';
import { RuxTabPanel } from './rux-tab-panel.js';

export class RuxTabs extends LitElement {
  static get is() {
    return 'rux-tabs';
  }
  static get properties() {
    return {
      small: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.small = false;
    this._panels = [];
    this._panelGroup = '';

    this._registerPanelsListener = this._registerPanels.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('register-panels', this._registerPanelsListener);
    this.addEventListener('click', this._onClick);

    set the role to tab
    this.setAttribute('role', 'tablist');
  }

  disconnectedCallback() {
    window.removeEventListener('register-panels', this._registerPanelsListener);
    this.removeEventListener('click', this._onClick);
    super.disconnectedCallback();
  }

  _onClick(e) {
    if (e.target.getAttribute('role') === 'tab' && e.target.getAttribute('disabled') === null) {
      this._setTab(e.target);
    }
  }

  get _tabs() {
    return Array.from(this.querySelectorAll('rux-tab'));
  }

  _registerPanels(e) {
    if (e.detail.for === this.getAttribute('id')) {
      this._panels = Array.from(e.detail.panels);
    }

    // if a tab isn’t selected in markup then default to first tab in the list
    const selectedTab = this._tabs.find((tab) => tab.selected) || this._tabs[0];
    this._setTab(selectedTab);
  }

  _reset() {
    // hide everything
    this._tabs.forEach((tab) => (tab.selected = false));
    this._panels.forEach((panel) => panel.classList.add('hidden'));
  }

  _setTab(selectedTab) {
    this._reset();

    find the panel whose aria-labeldby attribute matches the tab’s id
    const selectedPanel = this._panels.find(
        (panel) => panel.getAttribute('aria-labelledby') === selectedTab.getAttribute('id')
    );

    if (selectedTab) selectedTab.selected = true;
    if (selectedPanel) selectedPanel.classList.remove('hidden');
  }

  render() {
    return html`
      <style>
        :host,
        .rux-tabs {
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          font-size: 1.5rem;

          min-height: 5.625rem;
          height: 100%;
          width: auto;
          margin: 0;
          padding: 0;

          -moz-user-select: none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;

          contain: content;  This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment 
				}
				.rux-tabs .rux-tab {
					border-bottom: 5px solid var(--tabBorderColor);
				}

        :host([small]) {
          min-height: 3.125rem;
          font-size: 1rem;
        }
      </style>

      <slot></slot>
    `;
  }
}

customElements.define('rux-tabs', RuxTabs);





*/