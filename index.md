# Informe. Práctica 8: Aplicación de procesamiento de notas de texto.
## Desarrollo de Sistemas Informáticos.
#### ADRIAN HERNANDEZ SUAREZ - alu0101235516@ull.edu.es


### _**Introducción.**_

  Para llevar a cabo este informe, hemos tenido que realizar un ejercicio sobre el manejor de `chalk` y `yargs`, en este caso, una aplicación la cual la usaremos para el manejo de notas de texto para diferentes usuarios. Como en las anteriores prácticas, hemos hecho uso de un directorio de trabajo, uso de `mocha` y `chai` para los tests y el uso de `TypeDoc` para la documentación.
  Todo esto llevado a cabo con la metodología TDD, y utilizando el trabajo con ficheros gracias a la API síncrona, que nos proporciona **Node.js**. A todo esto, le tenemos que añadir la nueva implementación de `GitHub Actions` y `SonarCLoud`, una para la integración contínua y la otra para la comprobación de calidad y seguridad, respectivamente.

### _**Objetivos.**_

  El objetivo de esta práctica es lograr el correcto diseño y la efiente implementación de una aplicación que ayude a los usuarios a obtener una correcta gestión de las notas digitales. Además de familiarizarnos con las nuevas herramientas que vamos a usar, como `GitHub Actions` y `SonarCloud`.

### _**Primer paso: Creación de los directorios de trabajo**_

  Para completar este primer apartado, tendremos que seguir los pasos que se muestran en el siguiente enlace [Creación de un proyecto inicial para trabajar con TypeScript](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html) con esto lo que conseguiremos será crear un espacio de trabajo ideal para comenzar con el desarrollo de los ejercicios propuestos.
  Cuando tengamos esta parte realizada, tendremos creado un directorio llamado `./src`, en este directorio es donde alojaremos todos los ficheros que vayamos necesitando para la implementación de la práctica.
  
### _**Segundo paso: Instalación de mocha y chai; Instanbul y Coveralls; GitHub Actions y Sonar Cloud; Además de la configuración de TypeDoc**_
  
  Una vez tengamos hecho el primer paso de esta práctica tendremos que hacer la instalación de TypeDoc, esto es un generador automático de documentación para proyectos de **TypeScript**.  Para conocer mejor esto y seguir la instalación y configuración correctamente, mire el siguiente enlace [Instalación y Configuración de TypeDoc](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view). 
  Cuando tengamos la documentación creada, tendremos que proceder a la instalación de `Mocha` y de `Chai`. Para conocer mejor su funcionamiento y ver la correcta pauta de instalación, siga el siguiente enlace [Instalación y Configuración de Mocha y Chai](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view).
  
  Una vez tengamos toda la instalación previa, tendremos que instalar Instabull y conocer el uso de Coveralls, para ello podemos seguir los pasos en el siguiente enlace [Instalación y Configuración de Instanbull y Coveralls](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view).
  
  Para concluir con las instalaciones, para la correcta configuración de GitHub Actions y SonarCloud, podemos hacer eso de los siguientes videos explicativos:
  
  - [GitHub Actions](https://drive.google.com/file/d/1FLPargdPBX6JaJ_85jNsRzxe34sMi-Z3/view).
  - [Sonar Cloud](https://drive.google.com/file/d/1hwtPovQlGvthaE7e7yYshC4v8rOtLSw0/view).
  
  Cuando tengamos todo esto listo, lo que conseguiremos es hacer un TDD del proyecto, es decir, las pruebas unitarias. Utilizando el comando `npm test` podremos ejecutar dichas pruebas, viendo si la función que hemos creado, es correcta o no. Para dar validez y constancia de esto, tendremos que hacer un commit antes de la realización del código y con el test hecho, viendo como falla dicho test, y luego tendremos que hacer otro commit después de la correcta realización del código para dar constancia de que esta bien realizado.

### _**Tercer paso: Realización de nuestra aplicación**_

  **Enunciado a realizar**

Los requisitos que debe cumplir la aplicación de procesamiento de notas de texto, los podremos observar [aquí](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/). La estructura que he decidido tener para la realización de la práctica es la siguiente:

 Tendremos un directorio principal llamado `/src` en el cual alojaremos todos los ficheros que contiene nuestra aplicación, cada fichero, para tenerlo mejor ordenador, lo he guardado en un directorio diferentes, según su función. Esto es que, tenemos por un lado el directorio `Database` el cual se dedicará a almacenar las notas de los usuarios, un directorio `Notes` el cual se dedica a almacenar el fichero `notes.ts` el cual contiene la clase Note, que explicaremos posteriormente y por otro lado, tenemos un directorio llamado `Users` el cual almacena el fichero con la clase `User`. Finalmente, en nuestro directorio principal `src`, tenemos un fichero llamado `index.ts` el cual es el corazon de nuestra aplicación, ya que ahí se encontrarán todos los comandos de ejecución de nuestro código.
 
 Cabe destacar que también se debe aportar la documentación mediante el uso de TypeDoc y usar una metodología de desarrollo dirigido por pruebas/comportamiento. El código fuente de las pruebas deberá estar alojado en un fichero `index.spec.ts` dentro del directorio `tests`.

  **La clase Fighter (padre)**

```TypeScript
export abstract class Fighter {
  protected stats = {
    AT: 0,
    DF: 0,
    SP: 0,
    HP: 0,
  }

  /**
   * Constructor de la clase
   * @param name nombre del fighter
   * @param weight peso del fighter
   * @param height altura del fighter
   * @param phrase frase célebre del fighter
   * @param stats estadísticas del fighter
   */

  constructor(protected name: string,
              protected weight: number,
              protected height: number,
              protected phrase: string,
              stats: [number, number, number, number]) {
    this.stats.AT = stats[0];
    this.stats.DF = stats[1];
    this.stats.SP = stats[2];
    this.stats.HP = stats[3];
  }

  /**
   * Funcion para obtener el nombre del fighter
   * @returns el nombre del fighter
   */
  public getName() {
    return this.name;
  }
  /**
   * Funcion para instanciar un nuevo nombre
   * @param name nombre nuevo
   */
  public setName(name: string) {
    this.name = name;
  }

  /**
   * Funcion para obtener el peso del fighter
   * @returns el peso del fighter
   */
  public getWeight() {
    return this.weight;
  }
  /**
   * Funcion para instanciar un nuevo peso
   * @param name peso nuevo
   */
  public setWeight(weight: number) {
    this.weight = weight;
  }

  /**
   * Funcion para obtener la altura del fighter
   * @returns la altura del fighter
   */
  public getHeight() {
    return this.height;
  }
  /**
   * Funcion para instanciar una nueva altura
   * @param name altura nueva
   */
  public setHeight(height: number) {
    this.height = height;
  }

  /**
   * Funcion para obtener la frase célebre del fighter
   * @returns frase célebre del fighter
   */
  public getPhrase() {
    return this.phrase;
  }
  /**
   * Funcion para instanciar una nueva frase célebre
   * @param name frase célebre nueva
   */
  public setPhrase(phrase: string) {
    this.phrase = phrase;
  }

  /**
   * Funcion para obtener el ataque del fighter
   * @returns el ataque del fighter
   */
  public getAT() {
    return this.stats.AT;
  }
  /**
   * Funcion para instanciar un nuevo ataque
   * @param name ataque nuevo
   */
  public setAT(AT: number) {
    this.stats.AT = AT;
  }

  /**
   * Funcion para obtener la defensa del fighter
   * @returns la defensa del fighter
   */
  public getDF() {
    return this.stats.DF;
  }
  /**
   * Funcion para instanciar una nueva defensa
   * @param name defensa nueva
   */
  public setDF(DF: number) {
    this.stats.DF = DF;
  }

  /**
   * Funcion para obtener la velocidad del fighter
   * @returns la velocidad del fighter
   */
  public getSP() {
    return this.stats.SP;
  }
  /**
   * Funcion para instanciar una nueva velocidad
   * @param name velocidad nueva
   */
  public setSP(SP: number) {
    this.stats.SP = SP;
  }

  /**
   * Funcion para obtener la vida del fighter
   * @returns la vida del fighter
   */
  public getHP() {
    return this.stats.HP;
  }
  /**
   * Funcion para instanciar una nueva vida
   * @param name vida nueva
   */
  public setHP(HP: number) {
    this.stats.HP = HP;
  }

  /**
   * Funcion para obtener el universo del que pertenece el fighter
   * @returns el universo del fighter
   */
  public abstract getUniverse(): string;
}
```
  La clase `fighter` es la clase padre de este ejercicio, dicha clase es de tipo abstracto, el cual contiene los atributos básicos de los luchadores que van a competir en nuestro combate. A parte de tener dicho constrcutor con el nombre, la altura, el peso, y las estadísticas básicas, tendremos los `getters` y `setters` de cada una de ellas, además de una función llamada `getUniverse()` la cual la usaremos para ver a que universo pertence nuestro luchador.

  **La clase Pokemon**
  
```TypeScript
import {Fighter} from './fighter';

type poktype = 'hierba' | 'electrico' | 'fuego' | 'agua';

export class Pokemon extends Fighter {
  private universePH: string = "Pokemon";

  /**
   * Constructor de la clase
   * @param name nombre del fighter
   * @param weight peso del fighter
   * @param height altura del fighter
   * @param phrase frase célebre del fighter
   * @param stats estadísticas del fighter
   * @param PokType tipo de pokemon que es
   */

  constructor(name: string, weight: number, height: number, phrase: string, stats: [number, number, number, number],
              private PokType: poktype) {
    super(name, weight, height, phrase, stats);
  }

  /**
   * Funcion para obtener el tipo de pokemon
   * @returns el tipo de pokemon que es
   */
  public getPokType() {
    return this.PokType;
  }
  /**
   * Instanciar un nuevo tipo a un pokemon
   * @param PokType el tipo que quieres instanciar
   */
  public setPokType(PokType: poktype) {
    this.PokType = PokType;
  }

  /**
   * Funcion para obtener el universo del que pertenece el fighter
   * @returns el universo del fighter
   */
  public getUniverse(): string {
    return this.universePH;
  }
}
```
  La clase `Pokemon` la utilizamos para poder crear un objeto de tipo `Pokemon` que tenga diferentes atributos, desde nuestro constructor recibiremos, el nombre del pokemon, el peso, la altura, el tipo, y finalmente las estadísticas básicas, que son (el ataque, la defensa, la velocidad, y la vida maxima). 
  Por otro lado tenemos los métodos `getters` de cada uno de los atributos del constructor que sean propios de esta clase, el cual nos servirá para poder acceder a cada uno de ellos y además hemos creado, los `setter` de cada atributo.
  
**la clase Naruto**

```TypeScript
import {Fighter} from './fighter';

type chakraType = 'rayo' | 'viento' | 'fuego' | 'agua' | 'tierra' | 'madera';
type ocularTec = 'sharingan' | 'byakugan' | 'rinnegan' | 'tenseigan';

export class Naruto extends Fighter {
  private universePH: string = "Naruto";

  /**
   * Constructor de la clase
   * @param name nombre del fighter
   * @param weight peso del fighter
   * @param height altura del fighter
   * @param phrase frase célebre del fighter
   * @param stats estadísticas del fighter
   * @param chakra tipo de chakra del fighter
   * @param ocular poder ocular (o no) del fighter
   */

  constructor(name: string, weight: number, height: number, phrase: string, stats: [number, number, number, number],
              private chakra: chakraType,
              private ocular?: ocularTec) {
    super(name, weight, height, phrase, stats);
  }

  /**
   * Funcion para acceder al chakra del fighter
   * @returns el tipo de chakra
   */
  public getChakra() {
    return this.chakra;
  }
  /**
   * Funcion para instanciar un chakra nuevo a un fighter
   * @param chakra el tipo de chakra a instanciar
   */
  public setChakra(chakra: chakraType) {
    this.chakra = chakra;
  }

  /**
   * Funcion para acceder al poder ocular del fighter
   * @returns el tipo de poder ocular
   */
  public getOcular() {
    return this.ocular;
  }
  /**
   * Funcion para instanciar un poder ocular nuevo a un fighter
   * @param chakra el tipo de poder ocular a instanciar
   */
  public setOcular(ocular: ocularTec) {
    this.ocular = ocular;
  }

  /**
   * Funcion para obtener el universo del que pertenece el fighter
   * @returns el universo del fighter
   */
  public getUniverse(): string {
    return this.universePH;
  }
}
```
  La clase `Naruto` la utilizamos para poder crear un objeto de tipo `Naruto` que tenga diferentes atributos, desde nuestro constructor recibiremos, el nombre del personaje, el peso, la altura, el tipo de chakra, el poder ocular (si tiene), y finalmente las estadísticas básicas, que son (el ataque, la defensa, la velocidad, y la vida maxima). 
  Por otro lado tenemos los métodos `getters` de cada uno de los atributos del constructor que sean propios de esta clase, el cual nos servirá para poder acceder a cada uno de ellos y además hemos creado, los `setter` de cada atributo.
  
**La clase Blizzard**

```TypeScript
import {Fighter} from './fighter';

type chakraType = 'mago' | 'brujo' | 'cazador' | 'druida';
type tipapoyo = 'alianza' | 'horda';

export class Blizzard extends Fighter {
  private universePH: string = "Blizzard";

  /**
   * Constructor de la clase
   * @param name nombre del fighter
   * @param weight peso del fighter
   * @param height altura del fighter
   * @param phrase frase célebre del fighter
   * @param stats estadísticas del fighter
   * @param raza raza del fighter
   * @param apoyo a que bando apoya el fighter
   */

  constructor(name: string, weight: number, height: number, phrase: string, stats: [number, number, number, number],
              private raza: chakraType,
              private apoyo: tipapoyo) {
    super(name, weight, height, phrase, stats);
  }

  /**
   * Funcion para acceder a la raza
   * @returns raza del fighter
   */
  public getRaza() {
    return this.raza;
  }
  /**
   * Funcion para instanciar una raza a un fighter
   * @param raza tipo de raza que quieres instanciar
   */
  public setRaza(raza: chakraType) {
    this.raza = raza;
  }

  /**
   * Funcion para acceder a l bando que apoya
   * @returns bando que apoya el fighter
   */
  public getApoyo() {
    return this.apoyo;
  }
  /**
   * Funcion para instanciar el bando a un fighter
   * @param apoyo bando que quiere apoyar
   */
  public setApoyo(apoyo: tipapoyo) {
    this.apoyo = apoyo;
  }

  /**
   * Funcion para obtener el universo del que pertenece el fighter
   * @returns el universo del fighter
   */
  public getUniverse(): string {
    return this.universePH;
  }
}
```
  La clase `Blizzard` la utilizamos para poder crear un objeto de tipo `Blizzard` que tenga diferentes atributos, desde nuestro constructor recibiremos, el nombre del personaje, el peso, la altura, su raza, el bando que apoya, y finalmente las estadísticas básicas, que son (el ataque, la defensa, la velocidad, y la vida maxima). 
  Por otro lado tenemos los métodos `getters` de cada uno de los atributos del constructor que sean propios de esta clase, el cual nos servirá para poder acceder a cada uno de ellos y además hemos creado, los `setter` de cada atributo.
  
**La clase FightBook**
  
```TypeScript
import {Fighter} from './fighter';

/**
 * Clase fight book contiene todos los luchadores.
 */
export class FightBook {
  /**
   * Constructor de la clase
   * @param GestorFighter Conjunto de luchadores
   */

  constructor(private GestorFighter: Fighter[]) {}

  /**
   * Funcion para acceder a la variable privada GestorFighter
   * @returns los luchadores que tenemos guardados
   */

  public getFighters() {
    return this.GestorFighter;
  }

  /**
   * Funcion para añadir un luchadores a la base de datos
   * @param luchadores nuevo luchadores que quieres añadir
   */

  public añadirFighter(fighter: Fighter) {
    this.GestorFighter.push(fighter);
  }

  /**
   * Funcion para mostrar por pantalla en forma de tabla la fight book
   */

  public mostrarFighterBook() {
    console.table(this.GestorFighter, ["name", "weight", "height", "PokType", "chakra", "ocular", "raza", "apoyo"]);
  }
}
```
  La clase `FightBook` nos sirve para almacenar todos los luchadores en un sitio, es decir, a esta clase, le podremos introducir un objeto de tipo `Pokemon`, `Naruto` o `Blizzard` el cual se quedará almacenado en nuestro **Libro de Luchadores**. Lo que tendrá el constructor de esta clase será un vector, el cual almacenará a todos los luchadores, pudiendo acceder a ellos o añadir otro a la base de datos.
  Tenemos el método `getFighters()` el cual retornará los luchadores que tenemos guardado dentro de ella, el método `añadirFighter()` el cual sirve (como nombre antes) para añadir un nuevo luchador al libro.
  Y finalmente tenemos la función `mostrarFighterBook()` la cual nos sirve para mostrar en forma de tabla, los luchadores dentro del libro con sus estadísticas, en este caso he decidido únicamente mostrar el nombre, el peso, la altura, la raza, el poder ocular y el tipo de pokemon que es.
  
  **La clase Combat**
  
```TypeScript
import {Fighter} from './fighter';
import {Naruto} from './naruto';
import {Pokemon} from './pokemon';

export class Combat {
  /**
   * COnstructor de la clase
   * @param fighter1 Primer luchador
   * @param fighter2 Segundo luchador
   */
  constructor(private fighter1: Fighter, private fighter2: Fighter) {
  }

  /**
   * Funcion para acceder a los datos del luchador 1
   * @returns los datos del luchador 1
   */
  public getFighter1() {
    return this.fighter1;
  }
  /**
   * Funcion para acceder a los datos del luchador 2
   * @returns los datos del luchador 2
   */
  public getFighter2() {
    return this.fighter2;
  }

  /**
   * Funcion para ver entre quien es el combate
   * @returns Una string con la informacion del combate
   */
  public getCombate() {
    return (`El combate es entre ${this.fighter1.getName()} y ${this.fighter2.getName()}`);
  }

  /**
   * Funcion para calcular el daño de cada luchador
   * @param FighterAttack que luchador esta atacando
   * @returns el daño que hace el luchador que esta atacando
   */
  public damageGet(FighterAttack: number) {
    let efectFighter1: number = 0;
    let efectFighter2: number = 0;
    let daño: number = 0;
    let dañoInt: number = 0;

    switch (this.fighter1.getUniverse()) {
      case "Pokemon": {
        if (this.fighter2.getUniverse() == "Blizzard") {
          efectFighter1 = 2;
          efectFighter2 = 0.5;
        } else if (this.fighter2.getUniverse() == "Naruto") {
          efectFighter1 = 0.5;
          efectFighter2 = 2;
        } else {
          if (this.fighter1 instanceof Pokemon && this.fighter2 instanceof Pokemon) {
            switch (this.fighter1.getPokType()) {
              case `fuego`: {
                if (this.fighter2.getPokType() == `hierba`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getPokType() == `agua` || this.fighter2.getPokType() == `fuego`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `agua`: {
                if (this.fighter2.getPokType() == `fuego`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                }
              } break;

              case `hierba`: {
                if (this.fighter2.getPokType() == `agua`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getPokType() == `fuego` || this.fighter2.getPokType() == `hierba`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `electrico`: {
                if (this.fighter2.getPokType() == `agua`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getPokType() == `electrico`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              }
            }
          }
        }
      } break;

      case "Naruto": {
        if (this.fighter2.getUniverse() == "Pokemon") {
          efectFighter1 = 2;
          efectFighter2 = 0.5;
        } else if (this.fighter2.getUniverse() == "Blizzard") {
          efectFighter1 = 0.5;
          efectFighter2 = 2;
        } else {
          if (this.fighter1 instanceof Naruto && this.fighter2 instanceof Naruto) {
            switch (this.fighter1.getChakra()) {
              case `rayo`: {
                if (this.fighter2.getChakra() == `viento` || this.fighter2.getChakra() == `agua`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `madera` || this.fighter2.getChakra() == `fuego`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `viento`: {
                if (this.fighter2.getChakra() == `fuego` || this.fighter2.getChakra() == `tierra`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `madera` || this.fighter2.getChakra() == `rayo`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `fuego`: {
                if (this.fighter2.getChakra() == `madera` || this.fighter2.getChakra() == `rayo`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `viento` || this.fighter2.getChakra() == `agua`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `agua`: {
                if (this.fighter2.getChakra() == `fuego`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `rayo` || this.fighter2.getChakra() == `tierra`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              }

              case `tierra`: {
                if (this.fighter2.getChakra() == `agua`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `viento`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              }

              case `madera`: {
                if (this.fighter2.getChakra() == `viento` || this.fighter2.getChakra() == `rayo`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `fuego`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              }
            }
          }
        }
      } break;

      case "Blizzard": {
        if (this.fighter2.getUniverse() == "Naruto") {
          efectFighter1 = 2;
          efectFighter2 = 0.5;
        } else if (this.fighter2.getUniverse() == "Pokemon") {
          efectFighter1 = 0.5;
          efectFighter2 = 2;
        } else {
          efectFighter1 = 1;
          efectFighter2 = 1;
        }
      } break;
    }

    if (FighterAttack == 0) {
      daño = 50 * (this.fighter1.getAT() / this.fighter2.getDF()) * efectFighter1;
    } else {
      daño = 50 * (this.fighter2.getAT() / this.fighter1.getDF()) * efectFighter2;
    }
    dañoInt = Math.round(daño);
    return dañoInt;
  }

  /**
   * Funcion para comenzar con la simulación del combate
   * @returns el vencedor del combate
   */
  public start() {
    let FighterAttack: number = 0;
    let i: number = 0;

    while ((this.fighter1.getHP() > 0) && (this.fighter2.getHP() > 0)) {
      console.log(`RONDA ${i}`);
      i++;

      if (FighterAttack == 0) {
        console.log(`Esta atacando: ${this.fighter1.getName()}`);
        this.fighter2.setHP((this.fighter2.getHP()) - this.damageGet(FighterAttack));
        console.log(this.fighter1.getPhrase());
        console.log(`Vida de ${this.fighter2.getName()} restante: ${this.fighter2.getHP()} HP.`);
        console.log();
        FighterAttack++;
      } else {
        console.log(`Esta atacando: ${this.fighter2.getName()}`);
        this.fighter1.setHP((this.fighter1.getHP()) - this.damageGet(FighterAttack));
        console.log(this.fighter2.getPhrase());
        console.log(`Vida de ${this.fighter1.getName()} restante: ${this.fighter1.getHP()} HP.`);
        console.log();
        FighterAttack--;
      }
    }
    console.log();
    if (this.fighter1.getHP() < 0) {
      console.log(`EL VENCEDOR ES ${this.fighter2.getName().toUpperCase()}!!!`);
      return this.fighter2.getName().toUpperCase();
    } else {
      console.log(`EL VENCEDOR ES ${this.fighter1.getName().toUpperCase()}!!!`);
      return this.fighter1.getName().toUpperCase();
    }
  }
}
```
 Finalmente tenemos la clase `Combat`, esta clase tendrá como parámetros dos luchadores diferentes, los cuales se prestarán a hacer una simulación de combate. Para poder ver quien gana el combate, primero tendremos que ver el daño que le hace un luchador a otro, para esto hacemos uso del método `damageGet()` el cual, según el tipo de luchador que sea y a que universo pertenezca, verá la eficacia que le hace a su adversario, es decir, si el tipo de luchador es del universo naruto, pues le hará una eficacia mayor a un luchador del universo pokemon. Si por el contrario, por ejemplo, pertenzcan al mismo universo, en el caso de los pokemon, tenemos un `switch` dentro de esta opción que nos dice que eficacia tiene un pokemon sobre otro, es decir, que veremos que un pokemon de tipo `fuego` le hará más daño a un pokemon de tipo `hierba`.
 
 Para poder hacer eso, hacemos uso de un `switch`, este switch es el mismo que use en la práctica 5.
 Hay que nombrar que a nuestro método le entra como parámetro el pokemon que ataca, si el pokemon 0 (que es el pokemon 1) o el pokemon 1 (que es el pokemon 2), dependiendo de esto, al final del método, se realizará una función de daño diferente, y se retornará.
 
 Al final de la clase, tenemos nuestro método `start()` este método es el principal de la clase, ya que es el que simula el combate, cuando el combate empiece, y mientas alguno de los dos luchadores tengan más de 0 de HP, seguirá el combate, lo que hace nuestro método es que según el luchador que ataque, se le hará un daño al adversario que le restará vida. Cuando uno de los dos luchadores tenga la vida inferior o igual a 0 se decidirá el ganador del combate.
 
   **Aqui tenemos el test del código:**
    
 ```TypeScript
import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Naruto} from '../src/ejercicio-1/naruto';
import {Blizzard} from '../src/ejercicio-1/blizzard';
// import {Fighter} from '../src/ejercicio-1/fighter';
import {Combat} from '../src/ejercicio-1/combat';
import {FightBook} from '../src/ejercicio-1/fightBook';


describe(`EJ 1 - EL COMBATE DEFINITIVO`, () => {
  const Starmie: Pokemon = new Pokemon("Starmie", 80, 1.1, "UUUR!", [75, 85, 115, 100], "agua");
  const Electrode: Pokemon = new Pokemon("Electrode", 66.6, 1.2, "AAARHG!", [50, 70, 150, 100], "electrico");

  const Hashirama: Naruto = new Naruto("Hashirama", 74, 1.80, "Wood Kage Technique!", [115, 95, 80, 100], "madera");
  const Madara: Naruto = new Naruto("Madara", 71, 1.80, "Susanoo!", [120, 80, 95, 100], "fuego", "sharingan");

  const Malfurion: Blizzard = new Blizzard("Malfurion", 94, 1.95, "By nature!", [97, 80, 111, 100], "druida", "alianza");
  const Guldan: Blizzard = new Blizzard("Guldan", 89, 1.75, "Your soul will be mine!", [135, 60, 101, 100], "brujo", "horda");

  const LibroLuchadores = new FightBook([]);

  LibroLuchadores.añadirFighter(Starmie);
  LibroLuchadores.añadirFighter(Electrode);
  LibroLuchadores.añadirFighter(Hashirama);
  LibroLuchadores.añadirFighter(Madara);
  LibroLuchadores.añadirFighter(Malfurion);
  LibroLuchadores.añadirFighter(Guldan);


  describe(`Clase padre (Fighter) instancias`, () => {
    it('Se puede instanciar un pokemon', () => {
      expect(Starmie).not.to.be.equal(null);
    });
    it('Se puede instanciar un pokemon', () => {
      expect(Electrode).not.to.be.equal(null);
    });
    it('Se puede instanciar un personaje de naruto', () => {
      expect(Hashirama).not.to.be.equal(null);
    });
    it('Se puede instanciar un personaje de naruto', () => {
      expect(Madara).not.to.be.equal(null);
    });
    it('Se puede instanciar un personaje de naruto', () => {
      expect(Malfurion).not.to.be.equal(null);
    });
    it('Se puede instanciar un personaje de naruto', () => {
      expect(Guldan).not.to.be.equal(null);
    });
  });

  describe(`Clase pokemon (Acceso)`, () => {
    it('Nombre Pokemon', () => {
      expect(Starmie.getName()).to.be.equal("Starmie");
    });
    it('Peso Pokemon', () => {
      expect(Starmie.getWeight()).to.be.equal(80);
    });
    it('Altura Pokemon', () => {
      expect(Starmie.getHeight()).to.be.equal(1.1);
    });
    it('Tipo Pokemon', () => {
      expect(Starmie.getPokType()).to.be.equal("agua");
    });
    it('Ataque Pokemon', () => {
      expect(Starmie.getAT()).to.be.equal(75);
    });
    it('Defensa Pokemon', () => {
      expect(Starmie.getDF()).to.be.equal(85);
    });
    it('Velocidad Pokemon', () => {
      expect(Starmie.getSP()).to.be.equal(115);
    });
    it('Vida Pokemon', () => {
      expect(Starmie.getHP()).to.be.equal(100);
    });
  });

  describe(`Probar mostrado del libro de luchadores en formato tabla`, () => {
    it('Se puede crear un tipo Fightbook', () => {
      expect(LibroLuchadores.getFighters()).not.to.be.equal(null);
    });
    it('Todos los luchadores del libro', () => {
      LibroLuchadores.mostrarFighterBook();
    });
  });

  describe(`Clase naruto (Acceso)`, () => {
    it('Elemento Chakra', () => {
      expect(Hashirama.getChakra()).to.be.equal("madera");
    });
    it('Poder ocular', () => {
      expect(Madara.getOcular()).to.be.equal("sharingan");
    });
  });

  describe(`Clase blizzard (Acceso)`, () => {
    it('Raza del luchador', () => {
      expect(Malfurion.getRaza()).to.be.equal("druida");
    });
    it('Apoyo a un bando', () => {
      expect(Malfurion.getApoyo()).to.be.equal("alianza");
    });
  });

  describe(`Combate principal`, () => {
    const combatePrincipal = new Combat(Hashirama, Malfurion);
    const combateSecundario = new Combat(Starmie, Electrode);

    it('Combatiente 1', () => {
      expect(combatePrincipal.getFighter1().getUniverse()).to.be.equal("Naruto");
    });
    it('Combatiente 2', () => {
      expect(combatePrincipal.getFighter2().getUniverse()).to.be.equal("Blizzard");
    });
    it('Combate principal', () => {
      expect(combatePrincipal.getCombate()).to.be.equal(`El combate es entre Hashirama y Malfurion`);
    });
    it('Comprobación del daño del fighter 1 al 2', () => {
      expect(combatePrincipal.damageGet(0)).to.be.equal(36);
    });
    it('Comprobación del catching phrase', () => {
      expect(combatePrincipal.getFighter1().getPhrase()).to.be.equal("Wood Kage Technique!");
    });
    it('QUE EMPIECE EL COMBATE!', () => {
      expect(combateSecundario.start()).to.be.equal(`ELECTRODE`);
    });
  });
});
```
