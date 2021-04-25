import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/Notes/note';

describe('EJ 8 - FILESYSTEM', () => {
  describe('Métodos de la clase Note', () => {
    const note = new Note("Nota roja", "Esto es una nota roja", "red");
    it('Se puede acceder al titulo de la nota', () => {
      const expected = "Nota roja";
      const result = note.getTitle();
      expect(expected).to.be.equal(result);
    });
  });
});
