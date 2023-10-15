import Layout from "@/Layout";
import { useParams } from "react-router-dom";

export const AthleteID = () => {

    const { id } = useParams();

  return (
    <Layout>
        <div>
          <h1>AthleteID</h1>
          <h2>{id}</h2>
        </div>
    </Layout>
  )
}
