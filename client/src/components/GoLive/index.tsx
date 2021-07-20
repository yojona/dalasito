import React, { FC, useState } from "react";
import { createUseStyles } from "react-jss";

//@ts-ignore
import Player from "./Player";
import { v4 as uuidv4 } from 'uuid';
import Input from "../Input";
import Button from "../Button";


const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontFamily: 'sans-serif',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
}))

const GoLive: FC<{ title: string }> = ({ title }) => {
  const classes = useStyles();
  const [key, setKey] = useState<string>(uuidv4());
  const baseUrl = 'http://localhost:9999/live';

  const generateNewKey = () => {
    setKey(uuidv4());
  };

  const copyKey = () => {
    const tempInput = document.createElement('input');
    tempInput.value = key;
    document.body.appendChild(tempInput);
    tempInput.select();

    document.execCommand('copy');
    document.body.removeChild(tempInput);
    console.log(`${baseUrl}/${key}.flv`)
  }

  return (
    <div className={classes.container}>
    <span>{title}</span>
    <Player
        url={`${baseUrl}/${key}.flv`}
        width={320}
        height={240}
      />
    <div className={classes.details}>
      <Input value={key} />
      <Button onClick={copyKey}>Copiar</Button>
      <Button onClick={generateNewKey}>Nueva llave</Button>
      </div>    </div>
  );
};

export default GoLive;
