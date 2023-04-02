function Banner () {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10 font-semibold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-7xl">Your Tech Blog!</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to {" "}
          <span className="underline decoration-2 decoration-[#5703d6]">
            Every Developers
          </span>{" "}
          favourite blog in the Devosphere
        </h2>
      </div>

      <p className="max-w-sm mt-5 text-gray-400 md:mt-2">
        New product features | The latest in technology | The weekly debugging nightmares & More!
      </p>
    </div>
  )
}

export default Banner;