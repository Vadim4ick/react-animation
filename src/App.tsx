import "./index.scss";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const bannerContent = [
  {
    one: {
      video: "public/videos/Brending.mp4",
    },

    two: {
      title: "Реализованных проектов",
      img: "public/img/100@2x.png",
    },

    three: {
      title: "Cоздание фирменного стиля компании",

      blocks: [
        {
          title: "срок реализации",
          price: "20",
          total: "рабочих дней",
        },
        {
          title: "cтоимость от:",
          price: "180 000",
          total: "рублей",
        },
      ],
    },
  },
  {
    one: {
      video: "/public/videos/Design.mp4",
    },

    two: {
      title: "проведенных исследований",
      img: "/public/img/50@2x.png",
    },

    three: {
      title: "руководство по использованию фирменного стиля",

      blocks: [
        {
          title: "срок реализации:",
          price: "30",
          total: "рабочих дней",
        },
        {
          title: "cтоимость от:",
          price: "350 000",
          total: "рублей",
        },
      ],
    },
  },
  {
    one: {
      video: "/public/videos/Issled.mp4",
    },

    two: {
      title: "долгосрочных партнЁров",
      img: "/public/img/15@2x.png",
    },

    three: {
      title: "рАЗРАБОТКА БИЗНЕС-ПЛАНА",

      blocks: [
        {
          title: "срок реализации:",
          price: "50",
          total: "рабочих дней",
        },
        {
          title: "cтоимость от:",
          price: "240 000",
          total: "рублей",
        },
      ],
    },
  },
];

gsap.registerPlugin(useGSAP);

function App() {
  const video = useRef<HTMLVideoElement>(null);
  const videoTwo = useRef<HTMLVideoElement>(null);

  const text = useRef<HTMLParagraphElement>(null);
  const textTwo = useRef<HTMLParagraphElement>(null);

  const image = useRef<HTMLParagraphElement>(null);
  const imageTwo = useRef<HTMLParagraphElement>(null);

  const textThree = useRef<HTMLParagraphElement>(null);
  const textThreeTwo = useRef<HTMLParagraphElement>(null);

  const blockInfo = useRef<HTMLParagraphElement>(null);
  const blockInfoTwo = useRef<HTMLParagraphElement>(null);

  const [currentIdx] = useState(0);

  useGSAP(
    () => {
      // Video block
      gsap.to(video.current, {
        y: "-100%",
        delay: 1.1,
        scale: 0.75,
        duration: 1,
        ease: "power1.in",
      });

      gsap.fromTo(
        videoTwo.current,
        {
          scale: 0.75,
        },
        {
          y: "-100%",
          scale: 1,
          delay: 1.5,
          duration: 1,
          ease: "power1.out",
        }
      );
      // Video block

      // Text two block
      gsap.to(text.current, {
        delay: 1.1,
        opacity: 0,

        duration: 1,
        ease: "power1.in",
        display: "none",
      });

      gsap.from(
        textTwo.current,

        {
          x: "-100%",
          zIndex: 0,
          delay: 1.5,
          duration: 1,
          ease: "power1.out",
        }
      );
      // /Text two block

      // Image two block
      gsap.to(image.current, {
        delay: 1.1,
        duration: 1,
        zIndex: -1,
        ease: "power1.in",
        y: "100%",
      });

      gsap.from(
        imageTwo.current,

        {
          y: "100%",
          zIndex: 0,
          delay: 1.5,
          duration: 1,
          ease: "power1.out",
        }
      );
      // /Image two block

      // Text three two block
      gsap.to(textThree.current, {
        delay: 1.1,
        opacity: 0,

        duration: 1,
        ease: "power1.in",
        display: "none",
      });

      gsap.from(
        textThreeTwo.current,

        {
          x: "-150%",
          zIndex: 0,
          delay: 1.5,
          duration: 1,
          ease: "power1.out",
        }
      );
      // /Text three two block

      // BlockInfo three
      gsap.to(blockInfo.current, {
        delay: 1.1,
        duration: 1,
        zIndex: -1,
        ease: "power1.in",
        y: "-150%",
      });

      gsap.from(
        blockInfoTwo.current,

        {
          y: "150%",
          zIndex: 0,
          delay: 1.5,
          duration: 1,
          ease: "power1.out",
        }
      );
      // /BlockInfo three
    },
    { scope: video }
  );

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__body">
          <div className="banner__block one">
            <video ref={video} autoPlay muted playsInline loop>
              <source
                src={bannerContent[currentIdx].one.video}
                type="video/mp4"
              />
            </video>

            <video ref={videoTwo} autoPlay muted playsInline loop>
              <source
                src={bannerContent[currentIdx + 1].one.video}
                type="video/mp4"
              />
            </video>
          </div>

          <div className="banner__block two">
            <p ref={text}>{bannerContent[currentIdx].two.title}</p>

            <p ref={textTwo}>{bannerContent[currentIdx + 1].two.title}</p>

            <div ref={image} className="image">
              <img src={bannerContent[currentIdx].two.img} alt="" />
            </div>

            <div ref={imageTwo} className="image">
              <img src={bannerContent[currentIdx + 1].two.img} alt="" />
            </div>
          </div>

          <div className="banner__block three">
            <div className="three__body">
              <p ref={textThree} className="three__title">
                {bannerContent[currentIdx].three.title}
              </p>
              <p ref={textThreeTwo} className="three__title">
                {bannerContent[currentIdx + 1].three.title}
              </p>

              <button className="three__bottom">Оставить заявку</button>
            </div>

            <div className="three-block__blocks">
              <div ref={blockInfo} className="three-block">
                {bannerContent[currentIdx].three.blocks.map((el) => (
                  <div key={el.title} className="three-block__section">
                    <div className="three-block__title">{el.title}</div>
                    <div className="three-block__price">{el.price}</div>
                    <div className="three-block__total">{el.total}</div>
                  </div>
                ))}
              </div>

              <div ref={blockInfoTwo} className="three-block">
                {bannerContent[currentIdx + 1].three.blocks.map((el) => (
                  <div key={el.title} className="three-block__section">
                    <div className="three-block__title">{el.title}</div>
                    <div className="three-block__price">{el.price}</div>
                    <div className="three-block__total">{el.total}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

// useGSAP(
//   () => {
//     gsap.to(container.current, { x: 360 });
//   },
//   { scope: container }
// );

// useEffect(() => {
//   if (container.current) {
//     // Создайте анимацию с помощью gsap
//     gsap.to(container.current, {
//       opacity: 0,
//       duration: 2,
//       onComplete: () => {
//         setCurrentIdx((currentIdx + 1) % bannerContent.length);
//         gsap.to(container.current, {
//           opacity: 1,
//           // duration: 2,
//         });
//       },
//     });
//   }
// }, [currentIdx]);
