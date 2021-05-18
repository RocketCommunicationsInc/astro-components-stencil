import { Component, Host, Prop, h, } from '@stencil/core';

@Component({
  tag: 'rux-classification-marking',
  styleUrl: 'rux-classification-marking.scss',
  shadow: true,
})
export class RuxClassification {
  @Prop() classification: string = "unclassified";
  @Prop() label: string = ""
  @Prop({reflect: true}) tag: boolean = false

  _getDisplayData(requestedClassification) {
      const approvedClassifications = {
        controlled: { bannerText: 'cui', tagText: 'cui' },
        confidential: { bannerText: 'cconfidential', tagText: 'c'},
        secret: { bannerText: 'secret', tagText: 's'},
        topsecret: { bannerText: 'top secret', tagText: 'ts'},
        topsecretsci: { bannerText: 'top secret//sci', tagText: 'TS//SCI'},
        unclassified: { bannerText: 'unclassified', tagText: 'u'},
      }
    
    const displayData = { text: '', label: ''}

    if (Object.keys(approvedClassifications).includes(requestedClassification)) {
      //set display data to appropriate classification object
      if (this.tag)
        displayData.text = approvedClassifications[this.classification].tagText
      if (!this.tag) {
        displayData.text = approvedClassifications[this.classification].bannerText
      }
    } else {
      //set display data to error state
      displayData.text = "Select a Classification Marking"
    }
    return displayData
  }

  render() {
    const {text, label} = this._getDisplayData(this.classification)

    return (
      <Host>
        <div class="rux-classification-marking">
          {text}
          {label}
        </div>
      </Host>
    );
  }

}




