import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  //servicio backend
  data: {name: string, image: string, description: string}[]= [
    {name: 'GitHub', image: 'assets/iconos/git.svg', description: ''},
    {name: 'JavaScript', image: 'assets/iconos/javascript.svg', description: ''},
    {name: 'TypeScript', image: 'assets/iconos/ts.svg', description: 'TS Typado'},
    {name: 'Java', image: 'assets/iconos/java.svg', description: ''}, 
    {name: 'PostgreSQL', image: 'assets/postgre.png', description: ''},
    {name: 'MongoDB', image: 'assets/mongodb.png', description: ''},
    {name: 'H2', image: 'assets/h2.png', description: 'H2 Database'},  
    {name: 'NodeJS', image: 'assets/node.png', description: ''},
    {name: 'Spring-Boot', image: 'assets/spring.svg', description: ''},
  ]
  //servicio frontend
  dataFront: {name: string, image: string, description: string}[]= [
    {name: 'Angular', image: 'assets/iconos/angular.svg', description: ''},
    {name: 'JavasCript', image: 'assets/iconos/javascript.svg', description: ''},
    {name: 'Typescript', image: 'assets/iconos/ts.svg', description: 'TS Typado'},
    {name: 'React', image: 'assets/iconos/react.svg', description: ''}, 
    {name: 'HTML', image: 'assets/iconos/html.svg', description: ''},
    {name: 'CSS', image: 'assets/iconos/css.svg', description: ''},
    {name: 'Jest', image: 'assets/iconos/jest.svg', description: 'H2 Database'},  
    
  ]

  dataProject: {id: number, name: string, imagen: string, url: string,  description: string, tecnologies: string[]}[]= [
    {
      id: 1,
      name: 'Gym-Go', 
      imagen: 'assets/project/gymgo.png', 
      url: 'https://gym-go-five.vercel.app/',
      description:'es una aplicación web diseñada para ayudarte a mantener un estilo de vida saludable y activo. Con un enfoque integral en el bienestar físico y mental, la aplicación ofrece una variedad de características para ayudarte a alcanzar tus objetivos de fitness y salud.' , 
      tecnologies: 
        ['JavasCript', 'Nodejs', 'Express', 'PostrgreSQL', 'Sequelize', 'Jwt', 'Bcrypt']
      },
    {
      id: 2,
      name: 'Contries', 
      imagen: 'assets/project/paises.png', 
      url: 'https://country-app-fawn-three.vercel.app/countries/by-region',
      description: 'es una aplicación web desarrollada en Angular que te permite explorar información detallada sobre países de todo el mundo. Con una interfaz intuitiva y atractiva, la aplicación aprovecha una API de países para proporcionar datos actualizados y precisos.', 
      tecnologies: 
        ['Angular', 'Typescript', 'HTML', 'CSS', 'Bootstrap', 'API']
    },
    {
      id:3,
      name: 'Rick and Morty', 
      imagen: 'assets/project/rick.png', 
      url: 'https://03-pi-marbello1973.vercel.app/',
      description: 'es una emocionante aplicación web construida utilizando React y JavaScript que sumerge a los usuarios en el vasto universo de la popular serie animada "Rick and Morty". La aplicación proporciona una experiencia interactiva y divertida para explorar y aprender más sobre los personajes, episodios y ubicaciones de este intrigante universo.', 
      tecnologies: 
        ['React', 'JavaScript', 'HTML', 'CSS', 'API Rick and Morty']
    },
    {
      id:4,
      name: 'Task-List', 
      imagen: 'assets/project/task.png', 
      url: 'https://mi-task-list-marbello1973.vercel.app/',
      description: 'es una aplicación simple y eficiente desarrollada en React y JavaScript que ayuda a los usuarios a gestionar sus tareas diarias de manera organizada. Diseñada con una interfaz intuitiva y fácil de usar, la aplicación permite a los usuarios agregar, editar y eliminar tareas, así como realizar un seguimiento de su progreso.', 
      tecnologies: 
        ['React', 'JavaScript', 'HTML', 'CSS', 'API Rick and Morty']
    },
    {
      id:5,
      name: 'Rita Uttara', 
      imagen: 'assets/project/rita.png', 
      url: 'https://ritauttara.netlify.app/',
      description: ' es un proyecto inscrito en Henry Project, desarrollado por estudiantes de Henry elegidos por la empresa inscrita en la plataforma, mi roll en este proyecto fue desarrollar el backend de la aplicación, usando Typescript, Node, Express, Middleware para roles de usuarios, JWT, cifrado con bcrypt, PostgreSQL y Sequelize para generar los modelos MVC en la base de datos.', 
      tecnologies: 
        ['Typescript', 'NodeJS', 'PostrgrSQL', 'Sequelize', 'Express', 'Bcrypt','Jwt', 'Nodemailer']
    },
    
  ] 
  
  id: number = 0;
  constructor() {
    this.id = this.id;
   }

  getDataFront(){
    return this.dataFront;
  }

  getDataProject(){
    return this.dataProject;
  }

  getData(){
    return this.data;
  }
}



