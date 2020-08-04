const { translateKwegoniantoRoman, translateRomanToDecimal } = require('./numbers');

describe('Translator', () => {
  it('should translate kwegonian to roman', () => {
    const input = 'kil jin pol';
    const output = translateKwegoniantoRoman(input);
    
    expect(output).toEqual(["I", "V", "X"]);
  });

  it('should translate roman to Decimal', () => {
    const inputKwegonian = 'polsx polsx jinjin pol kilow kil jin';
    const outputRoman = translateKwegoniantoRoman(inputKwegonian);
    const output = translateRomanToDecimal(outputRoman);

    expect(output).toBe(2544);
  });
});