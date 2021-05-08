import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/library-add.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-library-add',
  shadow: false,
})
export class RuxIconLibraryAdd {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#library-add`}></use>
      </svg>
    );
  }
}
