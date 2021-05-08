import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/create.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-create',
  shadow: false,
})
export class RuxIconCreate {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#create`}></use>
      </svg>
    );
  }
}
