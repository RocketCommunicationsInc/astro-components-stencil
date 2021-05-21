import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'rux-classification-marking',
  styleUrl: 'rux-classification-marking.scss',
  shadow: true,
})
export class RuxClassificationMarking {
  @Prop() classification: string = "unclassified";
  @Prop() label: string = ""
  @Prop({ reflect: true }) tag: boolean = false


  _getDisplayData(requestedClassification) {
    const approvedClassifications = {
      controlled: { bannerText: 'cui', tagText: 'cui' },
      confidential: { bannerText: 'confidential', tagText: 'c'},
      secret: { bannerText: 'secret', tagText: 's'},
      "top-secret": { bannerText: 'top secret', tagText: 'ts'},
      "top-secret-sci": { bannerText: 'top secret//sci', tagText: 'TS//SCI'},
      unclassified: { bannerText: 'unclassified', tagText: 'u'},
    }
    
    const displayData = { text: '', label: this.label}

    if (Object.keys(approvedClassifications).includes(requestedClassification)) {
      //maps display data to displayData object depending on banner or tag proeprty if classification is approved
      if (this.tag)
        displayData.text = approvedClassifications[this.classification].tagText
      if (!this.tag) {
        displayData.text = approvedClassifications[this.classification].bannerText
      }
    } else {
      //set display data to error state if classification is not in approved list
      displayData.text = "Select a Classification Marking"
      displayData.label = ""
    }

    return displayData
  }

  render() {
    const {text, label} = this._getDisplayData(this.classification)

    return (
      <Host>
        <div>
          {text}
          {label}
        </div>
      </Host>
    );
  }
}




