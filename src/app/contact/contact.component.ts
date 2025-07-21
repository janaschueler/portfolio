import { MatSelectModule } from '@angular/material/select';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ErrorStateMatcher } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  emailSent = false;
  errorMessage = signal('');

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    accept: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  // sendMail(event: Event): void {
  //   event.preventDefault();

  //   const formData = this.form.value;

  //   fetch('https://janaschuelerhub.com/sendmail.php', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: formData.name,
  //       email: formData.email,
  //       message: formData.message,
  //     }),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('Form submission failed');
  //       }
  //       console.log('email sent');
  //     })
  //     .catch((error) => {
  //       console.error('Form error:', error);
  //     });
  // }

  sendMail(event: Event): void {
    event.preventDefault();

    if (this.form.invalid) return;

    const formData = this.form.value;

    fetch('https://janaschuelerhub.com/sendmail.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Form submission failed');
        }

        console.log('email sent');

        this.emailSent = true;
        setTimeout(() => {
          this.emailSent = false;
        }, 3000);

        this.form.reset();

        Object.values(this.form.controls).forEach((control) => {
          control.markAsPristine();
          control.markAsUntouched();
          control.updateValueAndValidity();
        });
      })
      .catch((error) => {
        console.error('Form error:', error);
      });
  }

  private platformId = inject(PLATFORM_ID);

  toTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      accept: [false, Validators.requiredTrue],
    });

    this.form.get('accept')?.statusChanges.subscribe(() => {
      console.log('accept status:', this.form.get('accept')?.status);
      console.log('invalid:', this.form.get('accept')?.invalid);
      console.log('touched:', this.form.get('accept')?.touched);
    });
  }
}
