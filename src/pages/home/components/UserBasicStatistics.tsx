import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { calculateActiveYears } from '@/helpers';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

export const UserBasicStatistics = () => {

  const { userData, savingUserData } = useSelector((state: RootState) => state.user );

  
  return (
    <Card className="grid grid-cols-12 w-full p-3 mb-12 md:mb-0">
      <div className="grid col-span-4 p-3 justify-center">
        { ! savingUserData ? <span className="mb-6 text-center text-8xl font-bold">
          {calculateActiveYears(userData.foundation_date!)}
        </span> 
        :
        <>
          <Skeleton className="mt-2 mx-auto h-10 w-10 rounded-full" />
          <Skeleton className="mt-2 h-6 w-full" />
        </> }
        <span className='text-lg'>Años activo</span>
      </div>

      <div className="flex flex-col col-span-4 p-3 justify-between">

        {!savingUserData ? <span className="mb-6 text-center text-lg">
          Oro {userData.gold_medals}
        </span> 
        :
        <div className='flex items-center'>
          <Skeleton className="mt-2 mr-2 h-10 rounded-full w-14" />
          <div className='w-full'>
            <Skeleton className="mt-2 h-6 w-full" />
            <Skeleton className="mt-2 h-6 w-full" />
          </div>
        </div>
        }
        {!savingUserData ? <span className="text-center text-lg">
          Plata { userData.silver_medals }
        </span> :
        <div className='flex items-center mt-4'>
          <Skeleton className="mt-2 mr-2 h-10 rounded-full w-14" />
          <div className='w-full'>
            <Skeleton className="mt-2 h-6 w-full" />
            <Skeleton className="mt-2 h-6 w-full" />
          </div>
        </div> }
      </div>

      <div className="flex flex-col col-span-4 p-3 justify-between">
        {!savingUserData ? <span className="mb-6 text-center text-lg">
          Bronce { userData.bronce_medals }
        </span> :

        <div className='flex items-center'>
          <Skeleton className="mt-2 mr-2 h-10 rounded-full w-14" />
          <div className='w-full'>
            <Skeleton className="mt-2 h-6 w-full" />
            <Skeleton className="mt-2 h-6 w-full" />
          </div>
        </div> }

        {!savingUserData ? <span className="text-center text-lg">
          Total { userData.gold_medals + userData.silver_medals + userData.bronce_medals }
        </span> :
        
        <div className='flex items-center'>
          <Skeleton className="mt-2 mr-2 h-10 rounded-full w-14" />
          <div className='w-full'>
            <Skeleton className="mt-2 h-6 w-full" />
            <Skeleton className="mt-2 h-6 w-full" />
          </div>
        </div> }
      </div>
    </Card>
  )
}
