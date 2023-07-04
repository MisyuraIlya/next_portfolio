import Repositories from '@/components/Repositories/Repositories'
import { githubService } from '@/services/githubService'
import Image from 'next/image'

export default async function Home() {
  
  const repositories = await githubService.getRepositories()
  
  return (
    <main className="">
      <Repositories repositores={repositories}/>
    </main>
  )
}
