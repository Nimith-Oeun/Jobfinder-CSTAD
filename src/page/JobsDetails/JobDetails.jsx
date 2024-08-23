import Detail from './components/Detail'
import { Helmet } from 'react-helmet'
import React from 'react';


export default function JobDetails() {

    return (
        <>
            <section className='relative sm:h-[1300px] max-sm:h-[1750px] md:h-[1300px] lg:h-[1300px] xl:h-[1300px]'>
                <Helmet>
                    <title>Job Details / HR . Jobs</title>
                </Helmet>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0531ff5081280aa2608424d2a03a6e86db800e4a3bc8884420134524b0a4413c?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0531ff5081280aa2608424d2a03a6e86db800e4a3bc8884420134524b0a4413c?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0531ff5081280aa2608424d2a03a6e86db800e4a3bc8884420134524b0a4413c?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0531ff5081280aa2608424d2a03a6e86db800e4a3bc8884420134524b0a4413c?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0531ff5081280aa2608424d2a03a6e86db800e4a3bc8884420134524b0a4413c?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0531ff5081280aa2608424d2a03a6e86db800e4a3bc8884420134524b0a4413c?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0531ff5081280aa2608424d2a03a6e86db800e4a3bc8884420134524b0a4413c?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0531ff5081280aa2608424d2a03a6e86db800e4a3bc8884420134524b0a4413c?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b"
                    className="object-contain w-full aspect-[4.78] max-[450px]:max-md:aspect-[1.5] max-md:max-[450px] max-md:w-full"
                />
                <article className='absolute w-full xl:mt-[-140px] md:mt-[-50px] max-sm:mt-[-150px] sm:mt-[-30px]'>
                    <Detail />
                </article>
            </section>

        </>
    )
}
