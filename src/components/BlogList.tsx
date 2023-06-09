import Image from "next/image";
import urlFor from "../../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import Banner from "./Banner/Banner";
import Link from "next/link";
import SideBar from "./SideBar";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div>
      <Banner posts={posts}/>
      
      <hr className="border-[#0f2233] mb-10" />
      <div className="flex flex-col md:flex-row">
        <div className="gap-10 mx-4 md:mx-0 px-10 py-10 rounded gap-y-16 bg-[#0D0F12] shadow-md">
          <h3 className="text-3xl text-white">NOTÍCIAS RECENTES</h3>
          <hr className="border-[#00bcff] my-4 max-w-md" />

          {/* Posts */}
          {posts.map(post => (
            <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 pb-8 mt-10 border-b-[1px] border-[#0f2233] cursor-pointer group">
                <div className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105">
                  <Image
                    className="object-cover object-left lg:object-center"
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                  />
                </div>

                <div className="flex flex-col justify-center mt-6 text-white md:ml-10">
                  <p className="flex items-center gap-2">
                    {post.categories.map(category => (
                      <span key={category._id} className="mr-[2px] rounded px-2 bg-[#00bcff]">{category.title}</span>
                    ))}
                    {new Date(post._createdAt).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="my-5 text-3xl font-bold">{post.title}</p>
                  <p className="text-gray-500 line-clamp-4">{post.short_text}</p>
                  <p className="flex items-center mt-3 font-bold group-hover:underline">
                  Leia o post
                  <ArrowUpRightIcon className="w-4 h-4 ml-2" />
                </p>
                </div>
              </div>
            </ClientSideRoute>
          ))}
          <div className="flex justify-center">
            <Link href="/" className="bg-[#00bcff] text-white px-6 py-3 rounded mt-5 hover:scale-105 transition-transform duration-200 ease-out">Ver mais notícias...</Link>
          </div>
        </div>
        
        <SideBar />
      </div>
      
    </div>
  )
}