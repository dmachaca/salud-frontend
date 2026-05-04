import {
  Component,
  Input,
  forwardRef,
  ElementRef,
  ViewChild
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-c-input',
  templateUrl: './c-input.html',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CInput),
      multi: true
    }
  ]
})
export class CInput implements ControlValueAccessor {

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  // ===== INPUTS =====
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'password' | 'number' = 'text';
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() pattern?: string;
  @Input() icon?: string;

  @Input() readonly = false;
  @Input() disabled = false;

  @Input() showCounter = false;
  @Input() submitted = false;
  @Input() upperCase = false;
  // ===== INTERNAL =====
  value: string = '';
  hidePassword = true;

  onChange = (value: string) => {};
  onTouched = () => {};

  // ===== CONTROL VALUE ACCESSOR =====
  writeValue(value: string): void {
    let newValue = value || '';

    if (this.upperCase) {
      newValue = newValue.toUpperCase();
    }

    this.value = newValue;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // ===== INPUT EVENTS =====
  onInput(event: Event): void {
    let value = (event.target as HTMLInputElement).value;

    if (this.upperCase) {
      value = value.toUpperCase();
    }

    this.value = value;

    (event.target as HTMLInputElement).value = value;

    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }

  // ===== PASSWORD =====
  togglePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  get inputType(): string {
    if (this.type === 'password') {
      return this.hidePassword ? 'password' : 'text';
    }
    return this.type === 'number' ? 'tel' : this.type;
  }

  // ===== UX =====
  onDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onPaste(event: ClipboardEvent) {
    // aquí puedes meter tu lógica custom (sanitize, regex, etc)
  }

}
