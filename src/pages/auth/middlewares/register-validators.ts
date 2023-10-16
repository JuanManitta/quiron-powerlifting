import { RegisterProps } from "../interfaces/auth-interfaces";

export const registerValidators = ( values: RegisterProps) => {

    const errors: any = {}

    if (!values.fullName) {
        errors.fullName = 'Campo obligatorio';
      } else if (values.fullName.length > 15) {
        errors.fullName = 'Deben ser menos de 15 caracteres';
    }
  
    if (!values.email) {
      errors.email = 'Campo obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Dirección de email inválida';
    }

    if (!values.password) {
      errors.password = 'Campo obligatorio';
    } else if (values.password.length < 7) {
      errors.password = 'Deben ser 7 caracteres o más';
    }

    if (!values.gym_name) {
      errors.gym_name = 'Campo obligatorio';
    } else if (values.gym_name.length < 3) {
      errors.gym_name = 'Deben ser 3 caracteres o más';
    }

    if (!values.foundation_date) {
      errors.foundation_date = 'Campo obligatorio';
    } else if (values.foundation_date > new Date()) {
      errors.foundation_date = 'No puede ser una fecha posterior al día de hoy';
    }

    if (!values.gold_medals) {
      errors.gold_medals = 'Campo obligatorio';
    } else if (values.gold_medals < 0) {
      errors.gold_medals = 'No puede ser negativo';
    }
    if (!values.silver_medals) {
      errors.silver_medals = 'Campo obligatorio';
    } else if (values.silver_medals < 0) {
      errors.silver_medals = 'No puede ser negativo';
    }

    if (!values.bronce_medals) {
      errors.bronce_medals = 'Campo obligatorio';
    } else if (values.bronce_medals < 0) {
      errors.bronce_medals = 'No puede ser negativo';
    }

    return errors
}