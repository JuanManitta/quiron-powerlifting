import { Card } from "@/components/ui/card"

import { Bar, BarChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import Layout from "@/Layout";

import './athletes.css';
import { UserAthletesTable } from "./components/UserAthletesTable";



export const Athletes = () => {

  const data = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
  
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
  
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
  
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
  
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
  
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
  
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50) + 10,
    },
  
   
  ];


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
          
        <Card className="pr-6 pt-6">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
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
              <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="pr-6 pt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 50,
              right: 30,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="name"
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
            <Legend />
            <Line type="monotone" dataKey="total" stroke="hsl(var(--primary))" strokeWidth={4} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        </Card>
        
      </section>

    </main>
    </Layout>
  )
}
