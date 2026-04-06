"use client";
import PageBanner from "@/src/components/common/PageBanner";
import MaxWidth from "@/src/components/layout/MaxWidth";
import Image from "next/image";
import blogBanner from "../../../../../public/images/blog2.jpg";
import blog_01 from "../../../../../public/images/blog3.jpg";
import blog_02 from "../../../../../public/images/blog_1.jpg";
import { BiCalendar } from "react-icons/bi";

import LetsStart from "@/src/components/LetsStart";
import { title } from "process";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const page = () => {
  const router = useRouter();
  const blogData = {
    title: "The Ultimate Guide to Web Development in 2024",
    date: "January 1, 2024",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    ],
    latest: [
      {
        id: 1,
        img: blog_01,
        title: "How To Secure Your Desktop Application",
        date: "January 1, 2024",
        link: "/blog/1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      },
      {
        id: 2,
        img: blog_02,
        title: "Tips Work From Anywhere For Freelancer",
        date: "January 1, 2024",
        link: "/blog/2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      },
      {
        id: 3,
        img: blog_01,
        title: "TBest Desk Setup For Office Use Working",
        date: "January 1, 2024",
        link: "/blog/3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      },
      {
        id: 4,
        img: blog_02,
        title: "Tips For Get The Clean Code Programs",
        date: "January 1, 2024",
        link: "/blog/4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      },
    ],
  };
  return (
    <div>
      <PageBanner heading={"Blog Details"}/>
      <MaxWidth className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
        <div className="col-span-2">
          <p className="uppercase">Share Post :</p>
          <div className="flex my-4 gap-2">
            <FaFacebookF
              size={45}
              className="bg-[#0466C8] p-2.5 text-[#FFFFFF]"
            />
            <FaTwitter
              size={45}
              className="bg-[#0466C8] p-2.5 text-[#FFFFFF]"
            />
            <FaLinkedinIn
              size={45}
              className="bg-[#0466C8] p-2.5 text-[#FFFFFF]"
            />
          </div>
          <div className="relative w-full h-[200px] lg:h-[400px]">
            <Image
              src={blogBanner}
              fill
              alt="blog details"
              className="object-cover"
            />
          </div>
          <h1 className="font-bold my-8">
            The Ultimate Guide to Web Development in 2024
          </h1>
          {blogData?.description?.map((para, index) => (
            <p key={index} className="mt-4 text-gray-700">
              {para}
            </p>
          ))}
        </div>
        <div>
          <div className="flex gap-2">
            <div className="w-[3.5rem] my-auto h-[0.35rem] bg-blue-600"></div>
            <h4 className="my-auto">Recent Posts</h4>
          </div>
          <div>
            {blogData?.latest?.map((item) => (
              <div key={item.id} className="grid grid-cols-9 gap-4 my-8">
                <div className="col-span-4 relative w-full h-[6rem]">
                  <Image
                    src={item.img}
                    fill
                    alt={item.title}
                    className="object-cover"
                  />
                </div>
                <div className="col-span-5">
                  <h5
                    onClick={() => router.push(item.link)}
                    className="font-bold hover:text-[#0466C8] text-lg cursor-pointer"
                  >
                    {item.title}
                  </h5>
                  <p className="pt-2 my-auto">
                    {" "}
                    <BiCalendar
                      size={20}
                      className="inline mr-1 mb-1.5 text-[#0466C8]/40"
                    />{" "}
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidth>
      <LetsStart />
    </div>
  );
};

export default page;
