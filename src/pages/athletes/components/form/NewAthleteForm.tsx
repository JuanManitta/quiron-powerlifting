import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useFormik } from 'formik';
import { newAthleteValidators } from "./middlewares/new-athlete-validators";
import { DialogFooter } from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { startAddingNewAthlete } from "@/store/user";
import { DialogClose } from "@radix-ui/react-dialog";
import { RootState } from "@/store/store";
import { useMemo } from "react";

interface FormValues {
  fullName: string;
  age: string;
  squat: string;
  bench: string;
  deadlift: string;
  federation: string;
  isActive: boolean;
}
export const NewAthleteForm = () => {

  
  const dispatch = useDispatch();
  
  const {savingAthlete } = useSelector((state: RootState) => state.user);
  const isSavingAthlete = useMemo(() => savingAthlete, [savingAthlete]);

  const validate = ( values: FormValues ) => {
      const errors = newAthleteValidators(values);
      return errors
  }   
  
  const formik = useFormik({
    initialValues: {
      fullName: '',
      age: '',
      squat: '',
      bench: '',
      deadlift: '',
      federation: '',
      isActive: false,
      },
      validate,
      onSubmit: ( values: FormValues ) => {
        console.log(values);
        dispatch<any>(startAddingNewAthlete(values));
    },
  })
  
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="fullName" className="text-right">
            Nombre completo
          </Label>
          <Input
            id="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            className="col-span-3"
            placeholder="Nombre y apellido"
          />
        </div>
        {formik.errors.fullName ? (
          <div className="ml-auto">
            <span className="text-xs">{formik.errors.fullName}</span>
          </div>
        ) : null}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="age" className="text-right">
            Edad
          </Label>
          <Input
            id="age"
            placeholder="29"
            className="col-span-3"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
        </div>
        {formik.errors.age ? (
          <div className="ml-auto">
            <span className="text-xs">{formik.errors.age}</span>
          </div>
        ) : null}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="squat" className="text-right">
            Sentadilla
          </Label>
          <Input
            id="squat"
            placeholder="230"
            className="col-span-3"
            onChange={formik.handleChange}
            value={formik.values.squat}
          />
        </div>
        {formik.errors.squat ? (
          <div className="ml-auto">
            <span className="text-xs">{formik.errors.squat}</span>
          </div>
        ) : null}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="bench" className="text-right">
            Banco
          </Label>
          <Input
            id="bench"
            placeholder="120"
            className="col-span-3"
            onChange={formik.handleChange}
            value={formik.values.bench}
          />
        </div>
        {formik.errors.bench ? (
          <div className="ml-auto">
            <span className="text-xs">{formik.errors.bench}</span>
          </div>
        ) : null}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="deadlift" className="text-right">
            Peso muerto
          </Label>
          <Input
            id="deadlift"
            placeholder="290"
            className="col-span-3"
            onChange={formik.handleChange}
            value={formik.values.deadlift}
          />
        </div>
        {formik.errors.deadlift ? (
          <div className="ml-auto">
            <span className="text-xs">{formik.errors.deadlift}</span>
          </div>
        ) : null}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="federation" className="text-right">
            Federación
          </Label>
          <Input
            id="federation"
            placeholder="Falpo-ipf"
            className="col-span-3"
            onChange={formik.handleChange}
            value={formik.values.federation}
          />
        </div>
        {formik.errors.federation ? (
          <div className="ml-auto">
            <span className="text-xs">{formik.errors.federation}</span>
          </div>
        ) : null}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="isActive" className="text-right">
            En actividad
          </Label>
          <Switch id="isActive" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant='outline'>Cerrar</Button>
        </DialogClose>
      <Button type="submit" disabled={isSavingAthlete}>Agregar</Button>
      </DialogFooter>
    </form>
  );
}
