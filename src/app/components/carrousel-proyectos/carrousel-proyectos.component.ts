import { Component } from '@angular/core';
import { ProyectoCardComponent } from "../proyecto-card/proyecto-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrousel-proyectos',
  standalone: true,
  imports: [CommonModule ,ProyectoCardComponent],
  templateUrl: './carrousel-proyectos.component.html',
  styleUrl: './carrousel-proyectos.component.scss'
})
export class CarrouselProyectosComponent {

  // Definición de las variables para los íconos
  htmlIcon = 'assets/images/html.png';
  cssIcon = 'assets/images/css.png';
  sassIcon = 'assets/images/sass.png';
  bootstrapIcon = 'assets/images/bootstrap.png';
  springBootIcon = 'assets/images/springboot.png';
  angularIcon = 'assets/images/angular.png';
  tsIcon = 'assets/images/typescript.png';
  mySqlIcon = 'assets/images/mysql.png';
  tailwindIcon = 'assets/images/tailwind.png';

  projectsFullstack = [
    {
      title: 'Pintorest',
      description: 'Una plataforma de fotografía donde puedes registrarte e iniciar sesión para explorar fotos de otros usuarios, subir las tuyas y editarlas.',
      imageUrl: 'assets/foto-projects/pintorest.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.tailwindIcon, this.springBootIcon, this.mySqlIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/pintorest-app',
      websiteLink: 'https://pintorest-diego-maker.netlify.app/'
    },
    {
      title: 'Agenda de Contactos',
      description: 'Este proyecto es una agenda que permite añadir, modificar y eliminar contactos a través de API REST para gestionar los datos.',
      imageUrl: 'assets/foto-projects/agenda.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.tailwindIcon, this.springBootIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/agenda-contactos-app',
      websiteLink: 'https://agenda-contactos-diego-maker.netlify.app/'
    },
    {
      title: 'Users Management System',
      description: 'Una aplicación con loggin que gestiona usuarios, roles y permisos, asegurando acceso controlado y administración eficiente en entornos colaborativos.',
      imageUrl: 'assets/foto-projects/users.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.bootstrapIcon, this.springBootIcon, this.mySqlIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/users-app',
      websiteLink: 'https://users-management-system-diego-maker.netlify.app/login'
    },
  ];

  projectsFrontend = [
    {
      title: 'ENSIGNA-ecommerce',
      description: 'App Angular que permite a los usuarios explorar ropa mediante una API externa. Incluye formularios, sliders, cards. Ofreciendo una experiencia efectiva .',
      imageUrl: 'assets/foto-projects/ensigna.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.tailwindIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/ensigna/tree/gh-pages',
      websiteLink: 'https://ensigna-diego-maker.netlify.app/'
    },
    {
      title: 'Netflix-clone',
      description: 'Aplicación con inicio de sesión en Google Account (solo para usuarios en prueba) donde se muestran películas y carruseles de series.',
      imageUrl: 'assets/foto-projects/netflix.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.tailwindIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/netflix-clone-ng/tree/gh-pages',
      websiteLink: 'https://diegoarnanz-maker-netflis-no-signin.netlify.app/'
    },
    {
      title: 'Invoice-app',
      description: 'App que maneja una factura con datos, muestra detalles, donde se pueden añadir productos y calcular el total.',
      imageUrl: 'assets/foto-projects/inovice.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.bootstrapIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/factura-app',
      websiteLink: 'https://factura-diegoarnanz-maker.netlify.app'
    },
    {
      title: 'Cart-app',
      description: 'Aplicación para gestionar un carrito de compras, permitiendo agregar, eliminar y revisar productos.',
      imageUrl: 'assets/foto-projects/cart.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.bootstrapIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/cart-app',
      websiteLink: 'https://diegoarnanz-maker-cart-app.netlify.app'
    },
    {
      title: 'Pokédex App',
      description: 'Explora un catálogo de Pokémon de la primera generación. Ideal para fans del universo Pokémon.',
      imageUrl: 'assets/foto-projects/pokedex.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.sassIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/pokedex-app',
      websiteLink: 'https://diegoarnanz-maker-pokedex.netlify.app'
    },
    {
      title: 'Calculadora inversiones',
      description: 'Una herramienta para calcular el rendimiento de tus inversiones, estimando ganancias con un algoritmo.',
      imageUrl: 'assets/foto-projects/calculadora.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.cssIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/calculadora-inversiones',
      websiteLink: 'https://diegoarnanz-maker-calcu-inversion.netlify.app/'
    },
    {
      title: 'Easy-task',
      description: 'Una aplicación de varios usuarios para gestionar tareas; permite añadir, editar y eliminar tareas. ',
      imageUrl: 'assets/foto-projects/easytask.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.cssIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/easy-task',
      websiteLink: 'https://diegoarnanz-maker-easytask.netlify.app'
    },
    {
      title: 'To-do List',
      description: 'App que permite añadir, editar o finalizar tareas pendientes, pudiendo revisar las activas y completadas.',
      imageUrl: 'assets/foto-projects/todo.png',
      tecnologyIcons: [this.angularIcon, this.tsIcon, this.tailwindIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/toDo-app',
      websiteLink: 'https://diegoarnanz-maker-todo-app.netlify.app'
    },
  ];

  projectsHtmlCss = [
    {
      title: 'SmartWatch',
      imageUrl: 'assets/foto-projects/smartwatch.png',
      tecnologyIcons: [this.htmlIcon, this.cssIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/ProyectoSmartWatch',
      websiteLink: 'https://diegoarnanz-maker.github.io/ProyectoSmartWatch/'
    },
    {
      title: 'Tienda muebles',
      imageUrl: 'assets/foto-projects/tiendamuebles.png',
      tecnologyIcons: [this.htmlIcon, this.cssIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/TiendaMuebles?tab=readme-ov-file',
      websiteLink: 'https://diegoarnanz-maker.github.io/TiendaMuebles/'
    },
    {
      title: 'Ewallet-Paylnet',
      imageUrl: 'assets/foto-projects/ewallet.png',
      tecnologyIcons: [this.htmlIcon, this.cssIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/ewallet-Paylnet',
      websiteLink: 'https://diegoarnanz-maker.github.io/ewallet-Paylnet/'
    },
  ]

  projectsBackend = [
    {
      title: 'Gestión de Excursiones',
      description: 'Un Programa realziado con Spring Boot, JPA y Thymeleaf que permite administrar excursiones, guías y participantes. El backend gestiona las operaciones CRUD y la interfaz con Thymeleaf facilita la visualización y gestión de excursiones de forma sencilla.',
      imageUrl: 'assets/foto-projects/excursiones.png',
      tecnologyIcons: [this.springBootIcon, this.mySqlIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/Gestion-excursiones-spring-th-JPA',
      websiteLink: 'https://github.com/diegoarnanz-maker/Gestion-excursiones-spring-th-JPA'
    },
    {
      title: 'CRUD',
      description: 'App CRUD que permite gestionar  datos a través de las operaciones de Crear, Leer, Actualizar y Eliminar. Facilita el manejo de información en tiempo real, permitiendo a los usuarios agregar nuevos registros, visualizar datos existentes, actualizarlos cuando sea necesario y eliminarlos.',
      imageUrl: 'assets/foto-projects/spring.png',
      tecnologyIcons: [this.springBootIcon, this.mySqlIcon],
      githubLink: 'https://github.com/diegoarnanz-maker/crud',
      websiteLink: 'https://github.com/diegoarnanz-maker/crud/'
    }
  ];

    
}
