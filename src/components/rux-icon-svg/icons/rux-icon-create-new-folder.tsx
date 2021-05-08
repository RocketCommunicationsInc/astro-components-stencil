import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/create-new-folder.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-create-new-folder',
  shadow: false,
})
export class RuxIconCreateNewFolder {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#create-new-folder`}></use>
      </svg>
    );
  }
}
