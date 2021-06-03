import { Component, Host, h, Prop, Element, Listen } from '@stencil/core';


@Component({
  tag: 'rux-tabs',
  styleUrl: 'rux-tabs.scss',
  shadow: true,
})

//on load: default should be 
//selectedTabId should be this._tabs[0].id, and change when diff tab is clicked on
//_tabs gets filled on connectedCallback thru the _addTabs func
// _panels needs to be filled by _registerPanels, but needs to have uniform data being sent as params to _registerPanels.
// currently has diff event detail formats so can't run forEach sometimes
// Not sure we need id on ruxtabs
/*
On load: default tab selected, panels registered and loaded into _panels prop
- Only first tab should be selected, and only first tab panel info should be shown. 
 - Am I handling hidden class anywhere? 
- On a click of a diff tab, _selectedTabId should change based on the emitted event from rux-tab. 
- selected class should be added/removed based on new _selectedTabId
- On a click of a diff tab, panel info should change (hidden class) 





*/


export class RuxTabs {

  @Prop({ mutable: true }) ruxTabsId: string = "";
  @Prop() small: boolean = false;
  @Prop() _panels: Array<HTMLRuxTabPanelElement> = []
  // @Prop() _panelsGroup: string = '';
  @Prop() _tabs: Array<HTMLRuxTabElement> = [];
  @Prop() _selectedTabId: string = '';

  @Element() ruxTabsEl: HTMLElement;

  // @Listen('sendId', {target: 'window'})
  // handleListenSendId(e){
  //   // console.log('heard sendId', e)
  //   this._selectedTabId = e.detail;
  // }
  @Listen('registerPanels', {target: 'window'})
  handleListen(e){
    this._registerPanels(e); 
  }


  connectedCallback(){
    // window.addEventListener('register-panels', this._registerPanels);
    this.ruxTabsEl.addEventListener('click', (e) => this._onClick(e));
    // console.log(this.ruxTabsEl, 'ruxTabsEl')
    //build tabs arr
    this._addTabs();
    // this._addPanels();
    this._selectedTabId = this._tabs[0].id;
    // console.log(this._tabs, 'tabs here');
  }

  _addTabs(){
    this._tabs = Array.from(this.ruxTabsEl.querySelectorAll('rux-tab'));
    console.log(`tabs added: ${this._tabs}`)
    //get all id's from tabs rendered 
  }
  // _addPanels(){
  //   console.log('inside add panels')
  //   this._panels = Array.from(this.ruxTabsEl.querySelectorAll('rux-tab-panel'));
  //   console.log('panels added, here: ', this._panels)
  // }

  _registerPanels(e) {
    console.log(e.detail, 'E DETAIL')
    e.detail.forEach(panel => {
      this._panels.push(panel)
    })
    console.log('panels here: ', this._panels)
    // let temp: Array<HTMLRuxTabsPanelElement> = [];
    // //Pushes the panel that matches the selected tab id, thus telling us which panel needs to be shown
    // e.detail.forEach(panel => {
    //   console.log(`Pannel Attr Val: ${panel.attributes[0].value}, selcted tab id: ${this._selectedTabId}`)
    //   if(panel.attributes[0].value === this._selectedTabId){
    //     console.log(panel, 'PANEL')
    //     console.log(`panel.attr[0].val: ${panel.attributes[0].value}, selectedTab: ${this._selectedTabId}`)
    //     temp.push(panel);
    //   }
    // })
    // console.log(temp, "TEMP arr");
    // // if (e.detail. === this.ruxTabsEl.getAttribute('id')){
    // //   this._panels = Array.from(e.detail.panels);
    // // }
    // // if tab isn't selected, default to the first tab
    // this._panels = temp;
    // console.log(this._panels, 'panels has this inside')

    const selectedTab = this._tabs.find((tab) => tab.selected) || this._tabs[0];
    this._setTab(selectedTab);
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
    this._panels.forEach((panel) => panel.classList.add('hidden'));
  }

  
  _setTab(selectedTab) {
    this._reset();

    // find the panel whose aria-labeldby attribute matches the tab’s id
    const selectedPanel = this._panels.find(
        (panel) => panel.getAttribute('aria-labelledby') === selectedTab.getAttribute('id')
    );

    // if (selectedTab) selectedTab.selected = true;
    //* Find the index in the classList arr where 'hidden' is, remove it. May be a more optimal way to do this.
    // let index = selectedPanel.classes.indexOf('hidden');
    // if (selectedPanel) selectedPanel.classes.splice(index);
    if(selectedTab) selectedTab.selected = true;
    if(selectedPanel) selectedPanel.classList.remove('hidden');
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