import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  text = 'Desarrollador de Aplicaciones Web';
  animatedText: string[] = [];
  confettiLaunched = false;
  gameStarted = false;
  jumping = false;
  obstaclesJumped = 0; 
  collisionMessage: string | null = null; // Mensaje de colisión

  @ViewChild('explosionCanvas', { static: false }) explosionCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('character', { static: false }) character!: ElementRef<HTMLDivElement>;
  @ViewChild('obstacle', { static: false }) obstacle!: ElementRef<HTMLDivElement>;
  obstacleInterval: any;

  constructor() {
    this.animatedText = this.text.split('');
  }

  ngAfterViewInit() {
  }

  // Métodos para iniciar el juego y manejar clics
  startGame() {
    this.resetCollisionMessage(); // Reinicia el mensaje de colisión
    if (!this.gameStarted) {
      this.gameStarted = true;
      this.obstaclesJumped = 0; // Reinicia el contador al iniciar el juego
      this.startObstacleMovement(); // Comienza a mover los obstáculos
    }
  }

  handleClick(event: MouseEvent) {
    this.startGame(); // Inicia el juego al hacer clic
    this.jump(); // Salta al hacer clic
  }

  // Métodos para el salto y el movimiento del obstáculo
  jump() {
    if (this.jumping) return; // Evita saltar si ya está en salto
    this.jumping = true;
    const character = this.character.nativeElement;

    character.classList.add('jump');

    setTimeout(() => {
      character.classList.remove('jump');
      this.jumping = false;
      this.obstaclesJumped++;
    }, 500);
  }

  startObstacleMovement() {
    this.obstacleInterval = setInterval(() => {
      if (this.gameStarted) {
        this.checkCollision();
        this.moveObstacle();
      }
    }, 100);
  }

  moveObstacle() {
    const obstacle = this.obstacle.nativeElement;
    const currentPosition = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    obstacle.style.right = `${currentPosition + 5}px`;

    if (currentPosition > window.innerWidth) {
      obstacle.style.right = `-20px`; // Reinicia la posición del obstáculo
    }
  }

  checkCollision() {
    const character = this.character.nativeElement.getBoundingClientRect();
    const obstacle = this.obstacle.nativeElement.getBoundingClientRect();

    if (
      character.bottom >= obstacle.top &&
      character.right >= obstacle.left &&
      character.left <= obstacle.right
    ) {
      this.collisionMessage = '¡Colisión!'; // Actualiza el mensaje de colisión
      clearInterval(this.obstacleInterval);
      this.gameStarted = false; // Reinicia el juego si hay colisión
    }
  }

  resetCollisionMessage() {
    this.collisionMessage = null; // Reinicia el mensaje de colisión
  }

  // Método para lanzar confeti
  downloadCV(event: MouseEvent) {
    event.stopPropagation();
    this.launchConfetti();
  
    // Lógica para descargar el CV
    const link = document.createElement('a');
    link.href = 'assets/CV-diegomaker.pdf';
    link.download = 'Diego_Arnanz_Lozano-CV.pdf';
    link.click();
  }

  launchConfetti() {
    const duration = 1500; 
    const end = Date.now() + duration;
  
    const colors = ['#E64833', '#FBE9D0', '#90AEAD', '#244855', '#5D4C3E', '#FFD700'];
  
    const animation = () => {
      if (Date.now() < end) {
        confetti({
          particleCount: 7,
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          gravity: 1,
          colors: colors,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2,
          },
        });
  
        requestAnimationFrame(animation);
      }
    };
  
    animation();
  }

}
