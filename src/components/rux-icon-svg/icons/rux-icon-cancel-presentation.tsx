import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cancel-presentation.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cancel-presentation',
  shadow: false,
})
export class RuxIconCancelPresentation {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cancel-presentation`}></use>
      </svg>
    );
  }
}
