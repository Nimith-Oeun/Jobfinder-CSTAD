import * as React from "react";

export default function JobsHeader() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-14 text-4xl font-bold min-h-[156px] text-sky-950 max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38b6d6b5087736780f7ea090831ef0e2879c4787704e145fcbe7162eed14ac39?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38b6d6b5087736780f7ea090831ef0e2879c4787704e145fcbe7162eed14ac39?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38b6d6b5087736780f7ea090831ef0e2879c4787704e145fcbe7162eed14ac39?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38b6d6b5087736780f7ea090831ef0e2879c4787704e145fcbe7162eed14ac39?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38b6d6b5087736780f7ea090831ef0e2879c4787704e145fcbe7162eed14ac39?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38b6d6b5087736780f7ea090831ef0e2879c4787704e145fcbe7162eed14ac39?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38b6d6b5087736780f7ea090831ef0e2879c4787704e145fcbe7162eed14ac39?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38b6d6b5087736780f7ea090831ef0e2879c4787704e145fcbe7162eed14ac39?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative gap-4 ml-4 max-w-full w-[297px]">
        <div className="grow">Jobs Listing</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e485fd79bab9cfa3853a52570056dea018dde1999a8ddfabe1b646fab381b23?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948"
          className="object-contain shrink-0 self-start mt-1.5 aspect-square w-[41px]"
        />
      </div>
    </div>
  );
}