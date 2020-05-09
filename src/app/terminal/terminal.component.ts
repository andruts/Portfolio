import { Component, OnInit } from '@angular/core';
import Shell from "shell.js"
import Typed from 'typed.js';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  private commands: Array<String | Object> = [
    'Welcome to Andres Portfolio.',
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
  ]

  constructor() {
  }

  ngOnInit(): void {
    const shell = new Shell("#shell", {
      user: 'guest',
      host: 'andruts',
      path: '/Portfolio/',
      style: 'macos',
      theme: 'dark',
      responsive: true,
      commands: this.commands,
      typed: Typed
    });

  }

}
