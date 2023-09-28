import { UserCircle } from 'lucide-react'

export const UserBasicInfo = () => {
  return (
    <>

    <div className="grid justify-center">
      <UserCircle size={250} strokeWidth={1.2}  />
        <p className="font-bold text-5xl text-center mt-4">Jon Doe</p>
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
