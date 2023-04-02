import { groq } from "next-sanity";
import { client } from "../../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

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
    <article className="px-10 pb-28">
      <section className="space-y-2 border-[#5703d6] text-white">
        <div className="relative flex flex-col justify-between min-h-56 md:flex-row">
          <div className="absolute top-0 w-full h-full p-10 opacity-10 blur-sm">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
              className="object-cover object-center mx-auto"
            />
          </div>
          <section className="p-5 bg-[#5703d6] w-full">
            <div className="flex flex-col justify-between md:flex-row gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div></div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="pt-10 italic">{post.short_text}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="px-3 py-1 mt-4 text-sm font-semibold text-white bg-gray-800 rounded-full"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default Post;