import Repositories from '@/components/Repositories/Repositories'
import { githubService } from '@/services/githubService'
import Image from 'next/image'
import RadarChart from '@/components/RadarChart/RadarChart'
import MyHome from '@/components/Home/MyHome'
export default async function Home() {
  
  const repositories = await githubService.getRepositories()
  // const data = await githubService.getLanguages()
  return (
    <main className="">
      <MyHome/>
      {/* <Repositories repositores={repositories}/> */}
      {/* <RadarChart data={data} /> */}
    </main>
  )
}
