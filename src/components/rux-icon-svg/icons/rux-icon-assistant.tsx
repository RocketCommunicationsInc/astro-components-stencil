import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/assistant.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-assistant',
  shadow: false,
})
export class RuxIconAssistant {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#assistant`}></use>
      </svg>
    );
  }
}
