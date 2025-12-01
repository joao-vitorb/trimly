import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          SOBRE <span className="text-gray-700 font-medium">NÓS</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Bem-vindo ao Trimly. Somos uma plataforma dedicada a facilitar o
            agendamento de barbearia sem complicações. Nosso objetivo é conectar
            você com barbearias confiáveis e profissionais, permitindo que você
            reserve horários convenientes com facilidade.
          </p>
          <p>
            Nossa missão é simplificar o processo de agendamento, economizando
            seu tempo e esforço. Acreditamos que cuidar da sua aparência deve
            ser uma experiência agradável e sem estresse, e estamos aqui para
            tornar isso possível.
          </p>
          <b className="text-gray-800">Nossa Visão</b>
          <p>
            Nossa visão na Trimly é criar uma experiência de barbearia perfeita
            para todos os usuários. Nosso objetivo é conectar clientes e
            profissionais de barbearia, facilitando o acesso aos cuidados que
            você precisa, quando precisar.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          POR QUE{" "}
          <span className="text-gray-700 font-semibold">NOS ESCOLHER?</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#EFBF04] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Eficiência:</b>
          <p>
            Agendamento de compromissos simplificado que se encaixa no seu
            estilo de vida ocupado.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#EFBF04] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Conveniência:</b>
          <p>
            Acesso a uma rede de profissionais de barbearia confiáveis na sua
            região.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#EFBF04] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalização:</b>
          <p>
            Profissionais prontos para realizar todo tipo de trabalho
            solicitado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
