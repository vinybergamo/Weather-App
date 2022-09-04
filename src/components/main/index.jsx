import React, { useEffect, useState } from "react";
import Data from "../../services/api";
import initialData from "../../helpers/initial";
import axios from "axios";
import InputSearch from "../Input";
import ButtonSearch from "../button";
import { ContainerDiv } from "./styles";
import BasicCard from "../card";

const key = process.env.NEXT_PUBLIC_KEY;
const url = process.env.NEXT_PUBLIC_URL;

const Main = (props) => {
  const [state, setState] = useState("São Paulo");
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    Data(state).then((response) => {
      setData(response);
    });
  };

  useEffect(() => {
    axios
      .get(`${url}${key}&q=sao paulo&aqi=no`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <>
      <ContainerDiv>
        <form onSubmit={handleSubmit}>
          <InputSearch onChange={(e) => setState(e.target.value)} />
          <ButtonSearch type="submit" text="Search" size="large" />
        </form>

        <BasicCard
          city={data.location.name}
          temp={`${data.current.temp_c}C°`}
          region={data.location.region}
          country={data.location.country}
          src={data.current.condition.icon}
          text={data.current.condition.text}
        />
      </ContainerDiv>
    </>
  );
};

export default Main;
