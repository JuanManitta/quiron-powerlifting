import { Skeleton } from '@/components/ui/skeleton';
import { RootState } from '@/store/store'
import { UserCircle } from 'lucide-react'
import { useSelector } from 'react-redux'

export const UserBasicInfo = () => {

  const { userData, savingUserData } = useSelector((state: RootState) => state.user );
  

  return (
    <>
    <div className="grid justify-center">

      { 
        !savingUserData ? 
          <>
          <div className='flex justify-center'>
            <UserCircle size={250} strokeWidth={1.2}  />
          </div>
          <p className="font-bold text-5xl text-center mt-4 text-upper-first">
            {userData.fullName}
          </p>
          </>
        : <>
          <div className="flex justify-center mb-3">
            <Skeleton className="h-60 w-60 rounded-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
          </> }
    </div>

    <div className="flex md:grid justify-around md:justify-center md:mb-8 mt-12 md:mt-0">

      <div className="mb-6">
        <p className="text-3xl font-bold">Gimnasio</p>
        {
          !savingUserData ? 
          <p className="text-center text-upper-first">{userData.gym_name}</p>
        : <>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-full" />
          </> }
      </div>
      
      <div>
          <p className="text-3xl font-bold text-center">Atletas</p>
        { 
        !savingUserData ?
          <p className="text-center">0</p>
        : <>
          <Skeleton className="h-4 w-full"/>
          <Skeleton className="mt-2 h-4 w-full"/>
          </>
        }
      </div>

    </div>

    </>
  )
}
