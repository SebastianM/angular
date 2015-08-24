import {forwardRef, Binding} from 'angular2/di';
import {CONST_EXPR} from 'angular2/src/facade/lang';
import {Directive} from 'angular2/metadata';
import {Validators} from '../validators';

export class NgValidator {
  get validator(): Function { throw "Is not implemented"; }
}

const requiredValidatorBinding =
    CONST_EXPR(new Binding(NgValidator, {toAlias: forwardRef(() => NgRequiredValidator)}));

@Directive({
  selector: '[required][ng-control],[required][ng-form-control],[required][ng-model]',
  bindings: [requiredValidatorBinding]
})
export class NgRequiredValidator extends NgValidator {
  get validator(): Function { return Validators.required; }
}

const minLengthValidatorBinding =
    CONST_EXPR(new Binding(NgValidator, {toAlias: forwardRef(() => NgMinLengthValidator)}));

@Directive({
  selector: '[minlength][ng-control],[minlength][ng-form-control],[minlength][ng-model]',
  bindings: [minLengthValidatorBinding]
})
export class NgMinLengthValidator extends NgValidator {
  get validator(): Function { return Validators.minLength; }
}