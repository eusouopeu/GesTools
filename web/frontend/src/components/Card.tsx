import React from "react"
import Image from "next/image"
import clsx from "clsx"

interface CardProps {
  className?: string
  image: any
  product: string
  price?: number
}
export default function Card({
  className,
  image,
  product,
  price,
  ...restProps
}: CardProps) {
  return (
    <div className={clsx('flex flex-col py-[10px] px-[16px]', className)} {...restProps}>
      <Image className='lg:w-[32px] lg:h-[29px]' src={heartIcon} alt='salvar produto em "Favoritos"' width={14} height={13} />
      <Image src={image} alt='imagem do produto' width={200} height={200} />

      <div>
        <p> {product} </p>
        <p className='font-black text-[11px] lg:text-[20px]'> {price ? price : `Fora de estoque`} </p>

        {price && (
          <div>
          </div>
        )}
      </div>
    </div>
  )
}
