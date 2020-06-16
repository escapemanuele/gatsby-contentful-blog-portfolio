import GatsbyImage, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';

// There’s no way to make GatsbyImage:
//  1) opt out of the JS-managed lazy loading behavior
//  2) and *not* add `loading="eager"`
// at the same time.
// To work around that, since we’re service the site without JS,
// we’re patching the component to trick gatsby-image into the right behavior.
// Tested with v2.3.1
class GatsbyEagerImage extends GatsbyImage {
  public isCritical: boolean;
  public addNoScript: boolean;

  constructor(props: any, context: any) {
    super(props, context);

    this.isCritical = true;
    this.addNoScript = false;
    // @ts-ignore
    this.state.isVisible = true;
  }
}

const Image = (props: GatsbyImageProps) => (
  // Disable lazy loading by default
  <GatsbyEagerImage fadeIn={false} {...props} />
);

export default Image;
