import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private serviceId = 'service_f89xr6y';
  private templateId = 'template_imma74m';
  private userId = 'k-BIITk3Uswq5UAMh';

  constructor() { }

  sendEmail(templateParams: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceId, this.templateId, templateParams, this.userId);
  }

}
