import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = () => (
  <div>
    <div className="flex justify-between items-center mx-14">
      <Skeleton circle height={50} width={50} />
      <Skeleton height={20} width={100} />
    </div>
    <div className="flex mx-16 gap-10 overflow-y-auto">
      <div className="w-[70%]">
        <Skeleton height={300} />
        <Skeleton height={30} width="50%" />
        <Skeleton count={5} />
        <Skeleton height={30} width="50%" />
        <Skeleton count={5} />
      </div>
      <div className="w-[30%] h-screen">
        <Skeleton height={200} />
        <Skeleton height={50} />
        <Skeleton height={50} />
      </div>
    </div>
  </div>
);

export default LoadingSkeleton;
