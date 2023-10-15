
import Layout from "@/Layout";
import { UserAthletesTable, UserBasicInfo, UserBasicStatistics } from "./components";

export const Home = () => {


  return (
    <Layout>
      
    <main className="grid grid-cols-12 justify-around gap-6 height-screen ">
      <section className="col-span-12 md:col-span-4 flex flex-col justify-evenly p-3">
        <UserBasicInfo/>
      </section>

      <section className="col-span-12 md:col-span-8 flex flex-col justify-evenly p-3">
        <UserBasicStatistics/>
        <UserAthletesTable/>
      </section>
    </main>

    </Layout>
  )
}
