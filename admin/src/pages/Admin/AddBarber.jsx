import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddBarber = () => {
  const [barberImg, SetBarberImg] = useState(false);
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [experience, SetExperience] = useState("1 Ano");
  const [fees, SetFees] = useState("");
  const [about, SetAbout] = useState("");
  const [speciality, SetSpeciality] = useState("Corte");
  const [degree, SetDegree] = useState("");
  const [address1, SetAddress1] = useState("");
  const [address2, SetAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!barberImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();

      formData.append("image", barberImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-barber",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        SetBarberImg(false);
        SetName("");
        SetEmail("");
        SetPassword("");
        SetFees("");
        SetAbout("");
        SetDegree("");
        SetAddress1("");
        SetAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Barber</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="barber-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={barberImg ? URL.createObjectURL(barberImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => SetBarberImg(e.target.files[0])}
            type="file"
            id="barber-img"
            hidden
          />
          <p>
            Clique para <br/> adicionar foto
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Nome</p>
              <input
                onChange={(e) => SetName(e.target.value)}
                value={name}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Email</p>
              <input
                onChange={(e) => SetEmail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Senha</p>
              <input
                onChange={(e) => SetPassword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2"
                type="password"
                placeholder="Senha"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experiência</p>
              <select
                onChange={(e) => SetExperience(e.target.value)}
                value={experience}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="Menos de 1 Ano">Menos de 1 Ano</option>
                <option value="1 Ano">1 Ano</option>
                <option value="2 Anos">2 Anos</option>
                <option value="3 Anos">3 Anos</option>
                <option value="4 Anos">4 Anos</option>
                <option value="5 Anos">5 Anos</option>
                <option value="6 Anos">6 Anos</option>
                <option value="7 Anos">7 Anos</option>
                <option value="8 Anos">8 Anos</option>
                <option value="9 Anos">9 Anos</option>
                <option value="Mais de 10 Anos">Mais de 10 Anos</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Valor</p>
              <input
                onChange={(e) => SetFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2"
                type="number"
                placeholder="R$00"
                required
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Especialidade</p>
              <select
                onChange={(e) => SetSpeciality(e.target.value)}
                value={speciality}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="Corte">Corte</option>
                <option value="Barba">Barba</option>
                <option value="Sobrancelha">Sobrancelha</option>
                <option value="Infantil">Infantil</option>
                <option value="Coloração">Coloração</option>
                <option value="Hidratação">Hidratação</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Formação</p>
              <input
                onChange={(e) => SetDegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Formação"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Endereço</p>
              <input
                onChange={(e) => SetAddress1(e.target.value)}
                value={address1}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Endereço 1"
                required
              />
              <input
                onChange={(e) => SetAddress2(e.target.value)}
                value={address2}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Endereço 2"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">Sobre</p>
          <textarea
            onChange={(e) => SetAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded"
            placeholder="Descrição do profissional"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#EFBF04] px-10 py-3 mt-4 text-white rounded-full"
        >
          Adicionar
        </button>
      </div>
    </form>
  );
};

export default AddBarber;
