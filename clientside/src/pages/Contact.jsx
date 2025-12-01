import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTATE <span className="text-gray-700 font-semibold">NOS</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600 uppercase">
            nossas unidades
          </p>
          <p className="text-gray-500">
            Rua Machado de Assis, nº 742, <br /> Bairro Fundinho, Uberlândia –
            MG
          </p>
          <p className="text-gray-500">
            Avenida Floriano Peixoto, nº 3150, <br /> Bairro Nossa Senhora
            Aparecida, Uberlândia – MG
          </p>
          <p className="text-gray-500">
            Rua das Acácias, nº 128, <br /> Bairro Morada da Colina, Uberlândia
            – MG
          </p>
          <p className="text-gray-500">
            Tel: (34) 91234-5678 <br /> Email: trimly@email.com
          </p>
          <p className="font-semibold text-lg text-gray-600 uppercase">
            trabalhe conosco
          </p>
          <p className="text-gray-500">
            Veja nossas oportunidades de emprego
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Ver Oportunidades
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
