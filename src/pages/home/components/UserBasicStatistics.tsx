import { Card } from '@/components/ui/card';

export const UserBasicStatistics = () => {
  return (
    <Card className="grid grid-cols-12 w-full p-3 mb-12 md:mb-0">
      <div className="grid col-span-4 p-3 justify-center">
        <span className="mb-6 text-center text-8xl font-bold">4</span>
        <span className='text-lg'>Años activo</span>
      </div>
      <div className="flex flex-col col-span-4 p-3 justify-between">
        <span className="mb-6 text-center text-lg">Oro 10</span>
        <span className="text-center text-lg">Plata 10</span>
      </div>
      <div className="flex flex-col col-span-4 p-3 justify-between">
        <span className="mb-6 text-center text-lg">Oro 10</span>
        <span className="text-center text-lg">Plata 10</span>
      </div>
    </Card>
  )
}
