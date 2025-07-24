import { MatSelectModule } from '@angular/material/select';
import { Component, inject, PLATFORM_ID, signal, AfterViewInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
declare const AOS: any;
/**
 * Standalone Angular Contact component.
 *
 * Renders a localized contact form using Angular Material and Reactive Forms.
 * The form includes fields for name, email, message, and a required
 * checkbox for accepting terms. All necessary modules are declared via the
 * `imports` array for standalone usage.
 *
 * Handles form validation, submission state, and error messaging.
 *
 * @component
 */

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatCheckboxModule, RouterModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  emailSent = false;
  errorMessage = signal('');
  private platformId = inject(PLATFORM_ID);
  /**
   * Reactive form group for the contact form.
   *
   * @property name   - The user's name. Required field.
   * @property email  - The user's email address. Required and must be a valid email format.
   * @property message - The user's message. Required field.
   * @property accept - Checkbox indicating acceptance of terms. Must be checked (true).
   */
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    accept: [false, Validators.requiredTrue],
  });

  /**
   * Initializes the form builder and sets up reactive email validation.
   * Updates the error message when the email status or value changes.
   *
   * @param fb - FormBuilder instance for creating the form.
   */
  constructor(private fb: FormBuilder) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  /**
   * Sets the email error message based on current validation state.
   * Handles 'required' and 'email' errors.
   */

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  /**
   * Handles contact form submission.
   *
   * Prevents default form behavior, validates the form, builds the payload,
   * and initiates the mail request if the form is valid.
   *
   * @param event - The form submission event.
   */
  sendMail(event: Event): void {
    event.preventDefault();
    if (this.form.invalid) return;
    const payload = this.buildMailPayload();
    this.sendMailRequest(payload);
  }

  /**
   * Sends the contact form payload to the server via HTTP POST.
   *
   * On success, calls the success handler; on failure, triggers the error handler.
   *
   * @param payload - The data to be sent in the request body.
   */
  private sendMailRequest(payload: any): void {
    fetch('https://janaschuelerhub.com/sendmail.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Form submission failed');
        this.handleMailSuccess();
      })
      .catch(this.handleMailError);
  }

  /**
   * Builds and returns a payload object containing the name, email, and message from the form.
   * @returns An object with name, email, and message properties.
   */
  private buildMailPayload() {
    const { name, email, message } = this.form.value;
    return { name, email, message };
  }

  /**
   * Handles successful email submission by showing a success message,
   * resetting the form, and updating form control states.
   */
  private handleMailSuccess() {
    this.emailSent = true;
    setTimeout(() => (this.emailSent = false), 3000);
    this.form.reset();
    Object.values(this.form.controls).forEach((control) => {
      control.markAsPristine();
      control.markAsUntouched();
      control.updateValueAndValidity();
    });
  }

  /**
   * Handles errors that occur during the mail sending process by logging them to the console.
   * @param error - The error object encountered.
   */
  private handleMailError(error: any) {
    console.error('Form error:', error);
  }

  /**
   * Smoothly scrolls the window to the top of the page if running in a browser environment.
   */
  toTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Initializes the contact form with validation rules on component initialization.
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      accept: [false, Validators.requiredTrue],
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 0);
  }
}
