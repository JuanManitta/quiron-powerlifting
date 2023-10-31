import { Skeleton } from '@/components/ui/skeleton';
import { RootState } from '@/store/store'
import { Upload, UserCircle } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

import profileImg from '@/assets/conan.jpg'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRef } from 'react';
import { startUploadingProfileImage } from '@/store/user';

export const UserBasicInfo = () => {

  const { userData, savingUserData, athletes } = useSelector((state: RootState) => state.user );
  const dispatch = useDispatch();
  const athletesQuantity = athletes.length;
  
  const fileInputRef = useRef<any>();
  
  const onInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if(!e.target.files) return;
    dispatch<any>(startUploadingProfileImage(e.target.files));
  }


  return (
    <>
    <div className="grid justify-center mx-auto">
      { 
        !savingUserData ? 
          <>
          <div className='flex justify-center'>
            { !userData.photoUrl ? (
            <UserCircle 
              size={250} 
              strokeWidth={0.4} 
              onClick={()=> fileInputRef.current.click()} 
            /> ) : (
            <img 
              src={userData.photoUrl} 
              alt="" 
              className="mb-9 rounded-full border-4 border-red-100 w-2/3 cursor-pointer"
              onClick={()=> fileInputRef.current.click()}  
            />)}
          </div>
          { !userData.photoUrl ? (
          <Button className='mb-6' variant='outline' onClick={()=> fileInputRef.current.click()}>
              <Upload className="mr-2 h-4 w-4" /> Subir imagen
          </Button> ) : ( null )}
          <Input type='file' onChange={onInputFileChange} className='hidden' ref={fileInputRef} />
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
          <p className="text-center">{athletesQuantity}</p>
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
