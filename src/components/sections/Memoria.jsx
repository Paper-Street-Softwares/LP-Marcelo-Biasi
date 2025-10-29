import React from "react";
import { useTranslation } from "react-i18next";
import content from "../../content/content";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

import ImageGallery from "react-image-gallery";
import heroImg1 from "../../assets/imgs/memoria/memoria1.webp";
import heroImg2 from "../../assets/imgs/memoria/memoria2.webp";

import "react-image-gallery/styles/css/image-gallery.css";

export default function Memoria({ colorMode }) {
  const { t } = useTranslation();

  const images = [
    {
      original: heroImg1,
      thumbnail: heroImg1,
    },
    {
      original: heroImg2,
      thumbnail: heroImg2,
    },
  ];

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea className={`${bgClass}`} paddingbot={true}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="flex justify-center w-[90%] tablet1:w-[450px] desktop1:w-[42%] desktop2:w-[42.8%]">
          <MotionDivDownToUp className="relative flex justify-center w-full ">
            {/* <div
                  className="bg-top rounded-xl w-full h-[350px] tablet1:h-[380px] desktop1:h-[500px] desktop1:w-[500px] bg-cover bg-no-repeat shadow-custom-opacity shadow-black/30"
                  style={{
                    backgroundImage: `url(${content.texts.hero.heroImg})`,
                    backgroundSize: "",
                  }}
                ></div> */}
            <div className="w-full">
              <ImageGallery
                items={images}
                showNav={false} // Ativando a navegação
                showFullscreenButton={false} // Desativando botão de tela cheia
                useBrowserFullscreen={false} // Desativando o uso de tela cheia do navegador
                showBullets={false}
                showPlayButton={false} // Remove o botão de play
                showThumbnails={false} // Remove as miniaturas
                autoPlay={true}
                additionalClass="custom-gallery"
              />
              <style>
                {`
                    .custom-gallery .image-gallery-slide img {
                      height: auto; 
                      width: 100%;
                    }

                    .custom-gallery .image-gallery-thumbnails img {
                      height: 60px;  
                      width: 100px;  
                      object-fit: cover; 
                    }
                  `}
              </style>
            </div>
          </MotionDivDownToUp>
        </div>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="hidden text-center desktop1:flex"
            miniTitle={t("homenagem.miniTag")}
            sectionHeaderTitle={t("homenagem.title")}
            sectionHeaderSubtitle={t("homenagem.subtitle")}
            type="article"
            titleColorSet={titleColor}
          />

          <div className="flex flex-wrap w-full justify-between gap-[32px] mt-[28px] desktop1:mt-0">
            <p className="text-white">
              Ao nosso pai, Dr. Sebastião Carlos Biasi, advogado e
              vice-presidente da PUC - Campinas.
              <br />
              <br />
              Você é o alicerce que forjou nosso caráter e nos mostrou o caminho
              da dignidade, respeito e valorização das pessoas. Com sua retidão
              e exemplo, nos inspirou a alcançar nossos objetivos. Homem
              estudioso, do bem e da paz, você é um modelo para nós.
              <br />
              <br />
              Obrigado por tudo, pai. Te amamos de todo o coração. Seus filhos.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
