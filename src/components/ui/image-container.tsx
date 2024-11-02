import React from 'react'

interface ImgContainerProps {
  src: string
  alt: string
  width?: number
  height?: number
  aspectRatio: 'portrait' | 'square'
  isScrollable?: boolean
}

const ImgContainer: React.FC<ImgContainerProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
  isScrollable,
}) => {
  const cn = (...classes: (string | boolean)[]) =>
    classes.filter(Boolean).join(' ')

  return (
    <div className="overflow-hidden rounded-md">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'h-auto w-auto object-cover transition-all hover:scale-105',
          aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
          isScrollable ? 'cursor-grab' : '',
        )}
      />
    </div>
  )
}

export { ImgContainer }
