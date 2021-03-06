/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<8f6781d488a4a99fba1b85d443436a95>>
 *
 * Generated by CLDRGenScript
 *
 * @flow
 */
const IntlVariations = require('IntlVariations');
const IntlCLDRNumberType22 = {
  getVariation(n: number): number {
    if (n % 100 === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n % 100 === 2) {
      return IntlVariations.NUMBER_TWO;
    } else if (n % 100 >= 3 && n % 100 <= 4) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType22;
