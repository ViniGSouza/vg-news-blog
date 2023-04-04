import { groq } from "next-sanity";
import { client } from "../../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import logo from "../../../../../public/logo.png";

type Props = {
  params: {
    slug: string;
  }
}

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
    *[_type=="post"]{
      slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug] [0]
    {
      ...,
      author->,
      categories[]->
    }
  `
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="mt-40 text-white dropshadow">
      <div className="flex flex-col md:flex-row">
        <div className="gap-10 mx-4 md:mx-0 px-10 py-10 rounded gap-y-16 bg-[#0D0F12] shadow-md">
          <h1 className="text-4xl font-extrabold">{post.title}</h1>
          <p>
            {new Date(post._createdAt).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="mt-4">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              width={1200}
              height={0}
            />
          </div>
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
        <div className="bg-[#0D0F12] mx-4 md:mx-0 md:ml-5 md:w-full md:max-w-[300px] max-h-[820px] shadow-md py-10 px-6">
          <h3 className="text-3xl text-white">BUSCAR</h3>
          <input
            type="text"
            placeholder="Digite aqui..."
            className="bg-[#0d0f12] border-[#00bcff] border-[1px] rounded mt-3 w-full pl-2 py-1 text-white"
          />
          <h3 className="mt-10 mb-5 pb-3 text-3xl text-white border-b-[1px] border-[#00bcff]">DESTAQUES</h3>
            <ul>
              <li className="my-5">
              <Link href="/">
                <Image src={logo} alt="destaque"/>
              </Link>
              </li>
              <li className="my-5">
              <Link href="/">
                <Image src={logo} alt="destaque"/>
              </Link>
              </li>
              <li className="my-5">
              <Link href="/">
                <Image src={logo} alt="destaque"/>
              </Link>
              </li>
              <li className="my-5">
              <Link href="/">
                <Image src={logo} alt="destaque"/>
              </Link>
              </li>
            </ul>
            <h3 className="mt-10 mb-5 pb-3 text-3xl text-white border-b-[1px] border-[#00bcff]">TUTORIAIS</h3>
            <ul>
              <li className="my-2">
              <Link href="/">
                <p className="flex items-center text-lg text-white uppercase">
                  <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 1</p>
              </Link>
              </li>
              <li className="my-2">
              <Link href="/">
                <p className="flex items-center text-lg text-white uppercase">
                  <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 2</p>
              </Link>
              </li>
              <li className="my-2">
              <Link href="/">
                <p className="flex items-center text-lg text-white uppercase">
                  <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 3</p>
              </Link>
              </li>
              <li className="my-2">
              <Link href="/">
                <p className="flex items-center text-lg text-white uppercase">
                  <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 4</p>
              </Link>
              </li>
              <li className="my-2">
              <Link href="/">
                <p className="flex items-center text-lg text-white uppercase">
                  <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 5</p>
              </Link>
              </li>
              <li className="my-2">
              <Link href="/">
                <p className="flex items-center text-lg text-white uppercase">
                  <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 6</p>
              </Link>
              </li>
            </ul>
        </div>
      </div>
    </article>
  );
}

export default Post;