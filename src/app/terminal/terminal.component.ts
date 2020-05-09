import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import Shell from "shell.js"
import Typed from 'typed.js';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
    
  private englishCommands: Array<String | Object> = [
    'Welcome to my CLI.',
    
    {
      "input": "about",
      "output": [
        "Hello 👋",
        "I'm Andrés Castellanos. A 23 years old web developer currently living in México.",
        "I like to put my hands on new technology. I love the feeling that comes when you make the things work.",
        "I have a software engineer degree and a dog called Zac."]
    },
    {
      "input": "experience",
      "output": [
        "6 Months working as part-time Android Developer",
        "8 months working as part-time Salesforce Developer",
        "6 months as Intern at Nearsoft Academy",
        "3 months working as back-end developer using TypeORM + Express + postgreSQL"]
    },
    {
      "input": "programming languages",
      "output": [
        "JavaScript",
        "Java",
        "Python",
        "TypeScript",
        "VisualForce",
        "APEX",
        "SQL",
        "Clojure",
        "C",
        "R"
      ]
    },
    {
      "input": "languages",
      "output": [
        "B2 English Level",
        "Native spanish speaker"
      ]
    },
    {
      "input": "education",
      "output": [
        "Software Engineer degree with a specialty at Front End Development and UX/UI design",
        "@ Faculty of Math UADY"
      ]
    },
    {
      "input": "technologies",
      "output": [
        "Laravel",
        "Eloquent",
        "Angular",
        "Vue.js",
        "TypeORM",
        "Webpack",
        "Ruby on Rails",
        "ActiveRecord",
        "Karma",
        "TSLint",
        "Material Components",
        "Android",
        "Bootstrap",
        "jQuery",
        "Materialize",
        "MySQL",
        "postgreSQL"
      ]
    }
  ];

  private spanishCommands: Array<String | Object> = [
    'Bienvenido a mi Interfaz de línea de comandos.',
    
    {
      "input": "about",
      "output": [
        "Hola 👋",
        "Soy Andrés Castellanos. Un desarrollador web de México.",
        "Me gusta probar diferentes tecnologías. Me gusta el sentimiento que viene despues de hacer las cosas funcionar.",
        "Tengo una licenciatura en Ingeniería de Software y un perro al que llamo Zac."]
    },
    {
      "input": "experience",
      "output": [
        "6 meses trabajando de medio tiempo como desarrollador Android y como diseñador UX/UI",
        "8 meses trabajando de medio tiempo como desarrollador Salesforce",
        "6 meses fui interno en Nearsoft",
        "3 meses trabajando como desarrollador de bases de datos usando TypeORM + Express + postgreSQL"]
    },
    {
      "input": "programming languages",
      "output": [
        "JavaScript",
        "Java",
        "Python",
        "TypeScript",
        "VisualForce",
        "APEX",
        "SQL",
        "Clojure",
        "C",
        "R"
      ]
    },
    {
      "input": "languages",
      "output": [
        "Nivel B2 en Inglés",
        "Español como idioma nativo"
      ]
    },
    {
      "input": "education",
      "output": [
        "Licenciatura en Ingeniería de Software con especialidad en desarrollo Front-End y diseño UX/UI.",
        "Otorgado por la Facultad de Matemáticas de la Universidad Autónoma de Yucatán"
      ]
    },
    {
      "input": "technologies",
      "output": [
        "Laravel",
        "Eloquent",
        "Angular",
        "Vue.js",
        "TypeORM",
        "Webpack",
        "Ruby on Rails",
        "ActiveRecord",
        "Karma",
        "TSLint",
        "Material Components",
        "Android",
        "Bootstrap",
        "jQuery",
        "Materialize",
        "MySQL",
        "postgreSQL"
      ]
    }
  ]

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) {
  }

  ngOnInit(): void {
    let commands = [];
    switch (this.locale.split('-')[0]) {
      case 'en':
        commands = this.englishCommands;
        break;
      case 'es':
        commands = this.spanishCommands;
        break;
      default:
        break;
    } 
    const shell = new Shell("#shell", {
      user: 'guest',
      host: 'andruts',
      path: 'Portfolio',
      style: 'macos',
      theme: 'dark',
      responsive: true,
      commands: commands,
      typed: Typed
    });

  }

   

}
