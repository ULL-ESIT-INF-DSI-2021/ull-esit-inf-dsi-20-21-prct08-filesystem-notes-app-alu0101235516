import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/prueba';

describe(`EJ 8 - PRUEBA`, () => {
  describe(`Correcta realizacion de la suma`, () => {
    it('Suma de dos numeros', () => {
      expect(suma(2, 2)).to.be.equal(4);
    });
  });
});
