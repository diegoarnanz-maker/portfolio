import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailServiceService } from '../../services/email-service.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  isSending: boolean = false;
  isSent: boolean = false;;

  constructor(private emailService: EmailServiceService) {}

  onSubmit() {
    if (this.isFormValid()) {
      this.isSending = true;

      const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      this.emailService.sendEmail(templateParams).then(
        (response) => {
          this.isSending = false;
          this.isSent = true;
          console.log('Correo enviado con éxito:', response);
        },
        (error) => {
          this.isSending = false;
          console.error('Error al enviar el correo:', error);
        }
      );
    }
  }

  isEmailValid(): boolean {
    return this.email.includes('@');
  }

  isFormValid(): boolean {
    return !!(this.name && this.isEmailValid() && this.message);
  }
}
