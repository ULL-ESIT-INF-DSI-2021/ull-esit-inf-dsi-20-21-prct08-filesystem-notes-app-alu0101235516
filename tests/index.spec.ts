import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/Notes/note';
import {User} from '../src/Users/users';

describe('EJ 8 - FILESYSTEM', () => {
  describe('Métodos de la clase Note', () => {
    const note = new Note("Nota roja", "Esto es una nota roja", "red");
    it('Se puede acceder al titulo de la nota', () => {
      const expected = "Nota roja";
      const result = note.getTitle();
      expect(expected).to.be.equal(result);
    });
    it('Se puede acceder al cuerpo de la nota', () => {
      const expected = "Esto es una nota roja";
      const result = note.getBody();
      expect(expected).to.be.equal(result);
    });
    it('Se puede acceder al color de la nota', () => {
      const expected = "red";
      const result = note.getColor();
      expect(expected).to.be.equal(result);
    });
    it('Se puede modificar el titulo de la nota', () => {
      const expected = "Nota azul"; note.setTitle("Nota azul");
      const result = note.getTitle();
      expect(expected).to.be.equal(result);
    });
    it('Se puede modificar el cuerpo de la nota', () => {
      const expected = "Esto es una nota azul"; note.setBody("Esto es una nota azul");
      const result = note.getBody();
      expect(expected).to.be.equal(result);
    });
    it('Se puede modificar el color de la nota', () => {
      const expected = "blue"; note.setColor("blue");
      const result = note.getColor();
      expect(expected).to.be.equal(result);
    });
  });


  describe('Métodos de la clase User', () => {
    const user = new User("alu0101235516");
    it('Se puede acceder al nombre del usuario', () => {
      const expected = "alu0101235516";
      const result = user.getUsername();
      expect(expected).to.be.equal(result);
    });
    it('Se puede modificar el nombre del usuario', () => {
      const expected = "alu010123381"; user.setUsername("alu010123381");
      const result = user.getUsername();
      expect(expected).to.be.equal(result);
    });
  });
});
