export const newAthleteValidators = (values:any) => {

    const errors: any = {}

    
    if (!values.fullName) {
        errors.fullName = 'Campo obligatorio';
      } else if (values.fullName.length > 25) {
        errors.fullName = 'Deben ser menos de 25 caracteres';
    }
  
    if (!values.age) {
      errors.age = 'Campo obligatorio';
    } else if (values.age.length > 3) {
      errors.age = 'Deben ser menos de caracteres';
    }

    if (!values.squat) {
      errors.squat = 'Campo obligatorio';
    } else if (values.squat.length > 3) {
      errors.squat = 'Deben ser menos de 3 caracteres';
    }

    if (!values.bench) {
      errors.bench = 'Campo obligatorio';
    } else if (values.bench.length > 3) {
      errors.bench = 'Deben ser menos de 3 caracteres';
    }

    if (!values.deadlift) {
      errors.deadlift = 'Campo obligatorio';
    } else if (values.deadlift.length > 3) {
      errors.deadlift = 'Deben ser menos de 3 caracteres';
    }

    if (!values.federation) {
      errors.federation = 'Campo obligatorio';
    } else if (values.federation.length > 15) {
      errors.federation = 'Must be 15 characters or less';
    }

    return errors
}