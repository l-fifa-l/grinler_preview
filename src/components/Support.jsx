import Image from 'next/image';
import microsoft from 'public/images/logos/microsoft.svg';
import nvidia from 'public/images/logos/nvidia.svg';

function Support() {
  return (
    <div className="h-8 mx-4 my-4 justify-center items-center">
      <div className=" text-center text-xl font-semibold">
        <h2 className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-md font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          Supported by
        </h2>
      </div>
      <div className="flex w-full space-y-4 space-x-2 items-center justify-evenly">
        <Image
          src={microsoft}
          alt="Picture of the author"
          width={200}
          height={50}
        />
        <Image
          src={nvidia}
          alt="Picture of the author"
          width={200}
          height={50}
        />
      </div>
    </div>
  );
}

export default Support;
