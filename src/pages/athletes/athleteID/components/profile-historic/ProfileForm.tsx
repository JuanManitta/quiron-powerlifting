import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { useFormik } from 'formik';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { DialogFooter } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { startUpdatingAthlete } from "@/store/user";
import { newAthleteValidators } from "@/pages/athletes/components/form/middlewares/new-athlete-validators";
import { useParams } from "react-router-dom";

interface FormValues {
  fullName: string;
  age: number;
  squat: number;
  bench: number;
  deadlift: number;
  federation: string;
  isActive: boolean;
}

export const ProfileForm = () => {


  const { id } = useParams();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true)

  const {savingAthlete, athletes } = useSelector((state: RootState) => state.user);
  const isSavingAthlete = useMemo(() => savingAthlete, [savingAthlete]);

  const [athletesData] = athletes.filter(athlete => athlete.id === id);
  const validate = ( values: FormValues ) => {
      const errors = newAthleteValidators(values);
      return errors
  }   
  
  const formik = useFormik({
    initialValues: {
      fullName: athletesData.fullName,
      age: athletesData.age,
      squat: athletesData.squat,
      bench: athletesData.bench,
      deadlift: athletesData.deadlift,
      federation: athletesData.federation,
      isActive: true,
      },
      validate,
      onSubmit: ( values: FormValues ) => {
        dispatch<any>(startUpdatingAthlete({...values, id: athletesData.id}));
    },
  })

  const handleChange = () => {
    setIsActive(!isActive)
    formik.setFieldValue('isActive', !isActive);
  }

  
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
            type="number"
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
            type="number"
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
            type="number"
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
            type="number"
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
          <Select
            onValueChange={(value) => formik.setFieldValue('federation', value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder='Seleccionar'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FALPO-IPF">FALPO - IPF</SelectItem>
              <SelectItem value="AAP-IPO">AAP - IPO</SelectItem>
              <SelectItem value="APUA-WABDL">APUA - WABDL</SelectItem>
              <SelectItem value="WRPF-Argentina">WRPF - Argentina</SelectItem>
              <SelectItem value="ARPL-IPL">ARPL - IPL</SelectItem>
              <SelectItem value="FEPOA-GPC">FEPOA - GPC</SelectItem>
            </SelectContent>
          </Select>
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
          <Switch  
            checked={isActive}
            onCheckedChange={handleChange}/>
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
