import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/redo.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-redo',
  shadow: false,
})
export class RuxIconRedo {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#redo`}></use>
      </svg>
    );
  }
}
