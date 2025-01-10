import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="grid place-items-center h-screen w-full">
      <div className="flex flex-col justify-center gap-4">
        <Button className="bg-primary">Click Here</Button>
        <h2 className="text-center">UBA Group</h2>
        <p className="text-center">Africa's global bank</p>
      </div>
    </div>
  )
}

export default Home;
