import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/import-export.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-import-export',
  shadow: false,
})
export class RuxIconImportExport {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#import-export`}></use>
      </svg>
    );
  }
}
