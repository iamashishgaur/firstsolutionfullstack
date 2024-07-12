import { BsPatchCheckFill } from "react-icons/bs";

import Image from "next/image";
export default function Aboutowner() {
  return (
    <div className="w-full px-20 py-20 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div>
            <h2 className="text-5xl font-semibold ">
              About First Solution Owner
            </h2>
          </div>
          <div className=" pt-16 px-18 flex flex-col gap-20">
            <div className=" grid grid-cols-2  gap-7 border p-5 rounded">
              <div>
                <h2 className="text-3xl font-semibold ">
                  Mr. Gayatriprasad Dubey
                </h2>

                <p className="p-7 text-[18px]  dark:text-slate-300 text-justify">
                  Gayatriprasad Dubey is a founder of First Solution. He is an
                  Graduated and worked more than 10 years in sales and
                  management also he has more than 10 years of experience in the
                  field of Recruitment Consultancy.
                </p>
                <p className="p-7 text-[18px]  dark:text-slate-300  text-justify">
                  We are a fast-growing company, but we have never lost sight of
                  our core values. We believe in collaboration, innovation, and
                  customer satisfaction. We are always looking for new ways to
                  improve our products and services.
                </p>
              </div>
              <div className="">
                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                  <div className="absolute top-0 -right-3 -z-10 w-[50%] h-[70%] rounded-[2rem] bg-dark dark:bg-light" />
                  <Image
                    src="/images/dubey.webp"
                    alt="ashish Kumar"
                    className="w-full h-auto rounded-2xl"
                    priority
                    // width={max-width:768px} 100vw ,{max-width:1200px} 50vw,33vw}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            Our Achievements
            <BsPatchCheckFill size={22} className="text-green-600" />
          </h2>
          <div className=" grid grid-cols-3 flex-wrap gap-10 mt-10">
            <div className="bg-[#f5f7f2] border rounded p-3">
              <Image
                src="/images/certificate/certificate-1.webp"
                alt="Certificate"
                className="rounded"
                width={350}
                height={350}
              />
            </div>
            <div className="bg-[#f5f7f2] border rounded p-3">
              <Image
                src="/images/certificate/certificate-2.webp"
                alt="Certificate"
                className="rounded"
                width={350}
                height={350}
              />
            </div>
            <div className="bg-[#f5f7f2] border rounded p-3">
              <Image
                src="/images/certificate/certificate-3.webp"
                alt="Certificate"
                className="rounded"
                width={350}
                height={350}
              />
            </div>
            <div className="bg-[#f5f7f2] border rounded p-3">
              <Image
                src="/images/certificate/certificate-4.webp"
                alt="Certificate"
                className="rounded"
                width={350}
                height={350}
              />
            </div>
            <div className="bg-[#f5f7f2] border rounded p-3">
              <Image
                src="/images/certificate/certificate-5.webp"
                alt="Certificate"
                className="rounded"
                width={350}
                height={350}
              />
            </div>
            <div className="bg-[#f5f7f2] border rounded p-3">
              <Image
                src="/images/certificate/certificate-6.webp"
                alt="Certificate"
                className="rounded"
                width={350}
                height={350}
              />
            </div>
            <div className="bg-[#f5f7f2] border rounded p-3">
              <Image
                src="/images/certificate/certificate-7.webp"
                alt="Certificate"
                className="rounded"
                width={350}
                height={350}
              />
            </div>
            <div className="bg-[#f5f7f2] border rounded p-3">
              <Image
                src="/images/certificate/certificate-8.webp"
                alt="Certificate"
                className="rounded"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
