import { useGSAP } from "@gsap/react";
import { Children, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TitleSection = ({className, title, ...props}) => {

    const titleMain = useRef();

  useGSAP(
    () => {
      const titleBoxes = gsap.utils.toArray('.titleBox');
      titleBoxes.forEach((titleBox) => {

        gsap.from(titleBox, {
          y: 70,
          opacity: 0,
          scrollTrigger: {
            trigger: titleBox,
            start: 'bottom bottom',
            end: 'top top',
            scrub: true,
         /*    markers: true, */
          },
        });
      });
    },
    { scope: titleMain }
  );
    return (
        <div className="mb-24 md:mb-36 flex justify-center" ref={titleMain} >
            <h2 className={"text-sm text-center bg-secondary  inline-block p-4 tracking-tight font-bold !text-gray-300 rounded-3xl ring-gray-500 ring-1 titleBox " + className} {...props}> {title} </h2> {/* effet d'ecriture */}
        </div>
    );
}

export default TitleSection
