import { Card } from "@/components/ui/card"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import Layout from "@/Layout";

import './athletes.css';
import { UserAthletesTable } from "./components/UserAthletesTable";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 



export const Athletes = () => {

  const [labelSatckBar, setLabelSatckBar] = useState('squat');
  const [labelLineBar, setLabelLineBar] = useState('deadlift')

  const { athletes } = useSelector((state: RootState) => state.user);
 

  const handleChangeStackBar = (value: string) => {
    setLabelSatckBar(value);
  }

  const handleChangeLineBar = (value: string) => {
    setLabelLineBar(value);
  }

  return (
    <Layout>
    <main className="height-screen mx-auto">

      <section className="p-3">
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <Card className="p-6 text-2xl">
            Cuadro 1
          </Card>
          <Card className="p-6 text-2xl">
            Cuadro 2
          </Card>
          <Card className="p-6 text-2xl">
            Cuadro 3
          </Card>
          <Card className="p-6 text-2xl">
            Cuadro 4
          </Card>
        </div>
      </section>

      <section className="p-3">
        <UserAthletesTable/>

      </section>

      <section className="p-3 grid grid-cols-2 gap-6">

        
      <div className="col-span-2 md:col-span-1">
        <Card className="pr-6 pt-6">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={athletes}>
              <XAxis
                dataKey="fullName"
                stroke="#888888"
                fontSize={14}
                fontFamily="Gotham SSm A"
                fontWeight='bold'
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={14}
                fontFamily="Gotham SSm A"
                fontWeight='bold'
                tickLine={false}
                axisLine={false}
              />
              <Bar dataKey={labelSatckBar} fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Select onValueChange={handleChangeStackBar}>
          <SelectTrigger className="w-[250px] mt-2">
            <SelectValue placeholder="Seleccionar levantamiento" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Levantamientos</SelectLabel>
              <SelectItem value="squat">Sentadilla</SelectItem>
              <SelectItem value="deadlift">Despegue</SelectItem>
              <SelectItem value="bench">Banca</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
        
      <div className="col-span-2 md:col-span-1">
        <Card className="pr-6 pt-6">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            width={500}
            height={300}
            data={athletes}
            margin={{
              top: 50,
              right: 0,
              bottom: 5,
              left: 3,
            }}
          >
            <XAxis
              dataKey="fullName"
              stroke="#888888"
              fontSize={14}
              fontFamily="Gotham SSm A"
              fontWeight='bold'
            />
            <YAxis
              stroke="#888888"
              fontSize={14}
              fontFamily="Gotham SSm A"
              fontWeight='bold'
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey={labelLineBar} stroke="hsl(var(--primary))" strokeWidth={3} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        </Card>

        <Select onValueChange={handleChangeLineBar}>
          <SelectTrigger className="w-[250px] mt-2">
            <SelectValue placeholder="Seleccionar levantamiento" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Levantamientos</SelectLabel>
              <SelectItem value="squat">Sentadilla</SelectItem>
              <SelectItem value="deadlift">Despegue</SelectItem>
              <SelectItem value="bench">Banca</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      </section>

    </main>
    </Layout>
  )
}



