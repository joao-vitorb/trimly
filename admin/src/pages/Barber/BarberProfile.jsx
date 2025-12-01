import React, { useContext, useEffect, useState } from "react";
import { BarberContext } from "../../context/BarberContext";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const BarberProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl } =
    useContext(BarberContext);
  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        name: profileData.name,
        about: profileData.about,
        degree: profileData.degree,
        speciality: profileData.speciality,
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
        experience: profileData.experience,
      };

      const { data } = await axios.post(
        backendUrl + "/api/barber/update-profile",
        updateData,
        { headers: { dToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [dToken]);

  return (
    profileData && (
      <div>
        <div className="flex flex-col gap-4 m-5">
          <div>
            <img
              className="bg-[#EFBF04]/80 w-full sm:max-w-64 rounded-lg"
              src={profileData.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white">
            {/* NOME */}
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {isEdit ? (
                <input
                  type="text"
                  className="border rounded px-3 py-1 text-xl font-medium text-gray-700 w-full max-w-md"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              ) : (
                profileData.name
              )}
            </p>

            {/* FORMAÇÃO + ESPECIALIDADE + EXPERIÊNCIA */}
            <div className="flex flex-wrap items-center gap-2 mt-3 text-gray-600">
              <div className="flex items-center gap-2">
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      className="border rounded px-2 py-1 text-sm"
                      placeholder="Formação"
                      value={profileData.degree}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          degree: e.target.value,
                        }))
                      }
                    />
                    <span>-</span>
                    <select
                      className="border rounded px-2 py-1 text-sm"
                      value={profileData.speciality}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          speciality: e.target.value,
                        }))
                      }
                    >
                      <option value="Corte">Corte</option>
                      <option value="Barba">Barba</option>
                      <option value="Sobrancelha">Sobrancelha</option>
                      <option value="Infantil">Infantil</option>
                      <option value="Coloração">Coloração</option>
                      <option value="Hidratação">Hidratação</option>
                    </select>
                  </>
                ) : (
                  <p>
                    {profileData.degree} - {profileData.speciality}
                  </p>
                )}
              </div>

              {isEdit ? (
                <select
                  className="border rounded px-2 py-1 text-xs"
                  value={profileData.experience}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      experience: e.target.value,
                    }))
                  }
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
              ) : (
                <button className="py-0.5 px-2 border text-xs rounded-full">
                  {profileData.experience}
                </button>
              )}
            </div>

            {/* SOBRE */}
            <div className="mt-4">
              <p className="flex items-center gap-1 text-sm font-medium text-neutral-800">
                Sobre:
              </p>
              {isEdit ? (
                <textarea
                  className="w-full mt-1 border rounded px-3 py-2 text-sm text-gray-700"
                  rows={4}
                  value={profileData.about}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      about: e.target.value,
                    }))
                  }
                  placeholder="Descrição do profissional"
                />
              ) : (
                <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                  {profileData.about}
                </p>
              )}
            </div>

            {/* VALOR */}
            <p className="text-gray-600 font-medium mt-4">
              Valor:{" "}
              <span className="text-gray-800">
                {currency}{" "}
                {isEdit ? (
                  <input
                    type="number"
                    className="border rounded px-2 py-1 w-24"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        fees: e.target.value,
                      }))
                    }
                    value={profileData.fees}
                  />
                ) : (
                  profileData.fees
                )}
              </span>
            </p>

            {/* ENDEREÇO */}
            <div className="flex gap-2 py-4">
              <p className="pt-1">Endereço:</p>
              <div className="text-sm">
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      className="border rounded px-2 py-1 mb-2 w-full max-w-md"
                      placeholder="Endereço 1"
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line1: e.target.value,
                          },
                        }))
                      }
                      value={profileData.address.line1}
                    />
                    <input
                      type="text"
                      className="border rounded px-2 py-1 w-full max-w-md"
                      placeholder="Endereço 2"
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line2: e.target.value,
                          },
                        }))
                      }
                      value={profileData.address.line2}
                    />
                  </>
                ) : (
                  <>
                    <p>{profileData.address.line1}</p>
                    <p>{profileData.address.line2}</p>
                  </>
                )}
              </div>
            </div>

            {/* DISPONIBILIDADE */}
            <div className="flex gap-2 items-center pt-2">
              <input
                type="checkbox"
                checked={profileData.available}
                onChange={() =>
                  isEdit &&
                  setProfileData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
              />
              <label>Disponível</label>
            </div>

            {/* BOTÃO EDITAR / SALVAR */}
            {isEdit ? (
              <button
                onClick={updateProfile}
                className="px-4 py-1 border border-[#EFBF04] text-sm rounded-full mt-5 hover:bg-[#EFBF04] hover:text-white transition-all"
              >
                Salvar
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="px-4 py-1 border border-[#EFBF04] text-sm rounded-full mt-5 hover:bg-[#EFBF04] hover:text-white transition-all"
              >
                Editar
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default BarberProfile;
