import { RootState } from '@/store/store'
import { UserCircle } from 'lucide-react'
import { useSelector } from 'react-redux'

export const UserBasicInfo = () => {

  const { displayName } = useSelector((state: RootState) => state.auth)
  return (
    <>
    <div className="grid justify-center">
      <UserCircle size={250} strokeWidth={1.2}  />
        <p className="font-bold text-5xl text-center mt-4">{displayName}</p>
    </div>

    <div className="flex md:grid justify-around md:justify-center md:mb-8 mt-12 md:mt-0">

      <div className="mb-6">
        <p className="text-3xl font-bold">Gimnasio</p>
        <p>Mi Gimnasio</p>
      </div>
      
      <div>
        <p className="text-3xl font-bold">Atletas</p>
        <p>20 atletas</p>
      </div>

    </div>

    </>
  )
}
