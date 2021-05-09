import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/save-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-save-alt',
  shadow: false,
})
export class RuxIconSaveAlt {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#save-alt`}></use>
      </svg>
    );
  }
}
