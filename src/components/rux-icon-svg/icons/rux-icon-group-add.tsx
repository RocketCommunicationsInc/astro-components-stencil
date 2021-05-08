import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/group-add.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-group-add',
  shadow: false,
})
export class RuxIconGroupAdd {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#group-add`}></use>
      </svg>
    );
  }
}
