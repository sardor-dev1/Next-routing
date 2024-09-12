import Image from 'next/image';
import { resolve } from 'path';
import React from 'react';

interface Address {
  geolocation: {
    lat: string;
    long: string;
  };
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}

export default async function Page() {


  await new Promise<void>((resolve)=>{
    setTimeout(()=>{
      resolve()
    }, 3000)
  })
  const data = await fetch("https://fakestoreapi.com/users/?limit=6");
  const users = await data.json();
  console.log(users);

  return (

    <>
      <div>
        <h2 className='text-[28px] font-semibold py-4'>Foydalanuvchilar</h2>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((item: User, index: number) => {
                return (
                  <li key={item?.id} tabIndex={index} className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                          alt="User Profile"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item?.name.firstname}
                          </p>
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item?.name.lastname}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {item.email}
                        </p>
                      </div>
                      <div className="inline-flex cursor-pointer items-center text-base font-semibold text-gray-900 dark:text-white">
                        {item.phone}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
