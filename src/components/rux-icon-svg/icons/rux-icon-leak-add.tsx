import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/leak-add.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-leak-add',
  shadow: false,
})
export class RuxIconLeakAdd {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#leak-add`}></use>
      </svg>
    );
  }
}
