import Image from "next/image"

export default function Logo(props: any) {
  const { renderDefault, title } = props

  return (
    <div className="flex items-center space-x-2">
      <Image 
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://minimal-blog-next.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frljucd0f%2Fproduction%2F8ce516415f84d92f71e8580be00e7c8b5ae3f21c-800x800.jpg%3Fq%3D75%26fit%3Dclip%26auto%3Dformat&w=48&q=75"
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}