import Header from './lithium-header';
import { Outlet } from 'react-router-dom';
export default function LithiumLayout() {
  return (
    <main className="flex min-h-screen flex-grow">
      <div className="flex w-full flex-col ">
        <Header />
        <div className="flex flex-grow flex-col px-4 pb-6 md:px-5 lg:px-6 lg:pb-8 3xl:px-8  3xl:pt-4 4xl:px-10">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
