import { groq } from "next-sanity";
import { client } from "../../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import SideBar from "@/components/SideBar";

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
          <p className="mt-4">
            {post.categories.map(category => (
              <span className="bg-[#00ccff] px-2 py-1 rounded mr-3" key={category._id}>{category.title}</span>
              )
            )}
            <span className="block mt-3 md:mt-0 md:inline-flex">
              Publicado por: <b><i>{post.author.name}</i></b>
            </span>
          </p>
          <div className="mt-5">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              width={1200}
              height={0}
            />
          </div>
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
        <SideBar />
      </div>
    </article>
  );
}

export default Post;