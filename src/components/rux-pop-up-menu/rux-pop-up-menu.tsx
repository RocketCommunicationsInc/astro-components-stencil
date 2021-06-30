import { Component, Host, h, Prop, Element, EventEmitter, Event, Method } from '@stencil/core';

/**
 * @slot menu-end - Area below the menu list to insert elements. For example, confirmation and/or cancel button group.
 */

@Component({
  tag: 'rux-pop-up-menu',
  styleUrl: 'rux-pop-up-menu.scss',
  shadow: true,
})
export class RuxPopUpMenu {

  @Element() el!: HTMLRuxPopUpMenuElement

  /**
   * Optional element to trigger opening and closing of the menu.
   * If none is supplied the element where aria-controls === menu id will be assigned
   */
  @Prop({mutable: true}) triggerEl: HTMLElement | undefined

  /**
   * Element to anchor the menu to. If none is given the menu will anchor
   * to the trigger element where aria-controls === menu id
   */
  @Prop({mutable: true}) anchorEl: HTMLElement | undefined
  
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

    if(!this.triggerEl) {
      if (!this.anchorEl) {
        this.triggerEl = this.el.parentElement.querySelector(`[aria-controls="${this.el.id}"]`);
        this.anchorEl = this.triggerEl
        this.triggerEl.addEventListener('mousedown', this._handleClick);
      } else {
        this.triggerEl = document.querySelector(`[aria-controls="${this.el.id}"]`);
        this.triggerEl.addEventListener('mousedown', this._handleClick)
      }
    } else {
      this.triggerEl.addEventListener('mousedown', this._handleClick)
      if (!this.anchorEl){
        this.anchorEl = this.triggerEl
      }
    }
  }

  disconnectedCallback() {
    this.triggerEl.removeEventListener('mousedown', this._handleClick);
  }

  /**
   * Returns 'true' if the menu is open, 'false' if it is not.
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
    const anchorBounds = this.anchorEl.getBoundingClientRect();
    const caret = parseInt(getComputedStyle(this.el, ':after').height);
    let top: number
    let left: number

    const padding = 8;
             
    left =
      menuBounds.width + anchorBounds.left - padding > window.innerWidth
        ? anchorBounds.right - menuBounds.width
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

    const caretLeft = anchorBounds.left - left;
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

    this.anchorEl.removeEventListener('mousedown', this._handleClick);

    this.menuDidOpen.emit()
  }

  _hide() {
    this.menuWillClose.emit()
    this.open = false;

    window.removeEventListener('mousedown', this._handleOutsideClick);
    window.removeEventListener('resize', this._setMenuPosition);

    this.anchorEl.addEventListener('mousedown', this._handleClick);
  }

  render() {
    return (
      <Host aria-hidden={!this.open ? "true" : "false"}>
        <ul role="menu" aria-expanded={`${this.open}`}>
          <slot></slot>
        </ul>
        <slot name="menu-end"></slot>
      </Host>
    );
  }

}
