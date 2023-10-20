

const LazyIframes = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <iframe className='md:w-full md:h-96 w-auto h-auto align-middle' src="https://www.youtube.com/embed/d2F74daT05Q?si=EdfCq4UqMlwaPdda" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <iframe className='md:w-full md:h-96 w-auto h-auto align-middle' src="https://www.youtube.com/embed/4LCIoy-kf_A?si=iwbijThXhVAPVwrJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <iframe className='md:w-full md:h-96 w-auto h-auto align-middle' src="https://www.youtube.com/embed/0KVXI9ce-ss?si=iG7wEfpwpz9GXpiF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

    </div>
  );
}

export default LazyIframes;