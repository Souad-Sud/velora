import { balanceItem } from "@/data/balanceItems";
import Image from "next/image";


const Balance = () => {
    return(
    <section className="w-full px-7 py-10 text-center">
         <h2 className="text-2xl text-gray-400 pb-3">ABOUT RITUALS</h2>
         <h3 className="text-4xl text-gray-500 font-bold">Better the balance</h3>
   
         <div className="mx-auto mt-10 grid w-full max-w-[1500px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {balanceItem.map((item, index) => (
             <div className="group w-full cursor-pointer flex flex-col items-center justify-center"  key={index}>
               <div className="relative aspect-3/4 w-full overflow-hidden">
                 <Image
                   src={item.image}
                   alt={item.title}
                   fill
                   className="object-cover transition-transform duration-500 group-hover:scale-110"
                 />
               </div>
   
               <div className="mt-4 flex flex-col gap-2 items-center cursor-pointer">
                 <a href={item.link} className="text-3xl text-gray-500 my-5">
                   {item.title}
                 </a>
                 <p className="text-xl mb-20 text-mist-500">{item.description}</p>
                 <button className="text-l cursor-pointer text-gray-500 group-hover:text-white group-hover:bg-black font-bold border-2 w-fit px-7 py-2 text-center transition-colors duration-300">
                   {item.link}
                 </button>
               </div>
             </div>
           ))}
         </div>
       </section>
    )
}
export default Balance;