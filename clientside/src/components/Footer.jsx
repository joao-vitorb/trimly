import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Seu destino final para agendamentos de barbearia sem complicações. <br />
            Encontre profissionais confiáveis, escolha horários convenientes e
            gerencie suas reservas com facilidade. Tudo em um só lugar.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">Visite</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Contato</li>
            <li>Política de Privacidade</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">CONTATO</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>(34) 91234-5678</li>
            <li>trimly@email.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 Trimly - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
