import { useRouter } from "next/router"
import Layout from "../../components/Layout";
export default function RequestPage() {


  const router=useRouter();
  return (
    <Layout>
        
        <h1>
            My Request
        </h1>
    </Layout>


    
  )
}
