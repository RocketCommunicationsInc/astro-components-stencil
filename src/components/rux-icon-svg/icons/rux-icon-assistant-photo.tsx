import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/assistant-photo.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-assistant-photo',
  shadow: false,
})
export class RuxIconAssistantPhoto {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#assistant-photo`}></use>
      </svg>
    );
  }
}
