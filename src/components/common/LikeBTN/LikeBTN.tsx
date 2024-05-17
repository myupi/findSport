import React, { FC } from "react";
import { DefaultLikeBTN } from "./likeBTN.s";
import Heart from "src/assets/icons/heart";
import { addAPI } from "src/services/AddService";

interface ILikeBTN {
  id: number;
}

export const LikeBTN: FC<ILikeBTN> = ({ id }) => {
  const [postFavourite] = addAPI.usePostFavouriteMutation();
  const handlePress = async (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();
    try {
      const result = await postFavourite({ id }).unwrap();
      alert(`${id} добавлен в понравившиеся`);
    } catch (error) {
      alert("Ошибка при добавлении в понравившиеся");
      console.error(error);
    }
  };
  return (
    <DefaultLikeBTN onClick={(event) => handlePress(event, id)}>
      <Heart.Outline />
    </DefaultLikeBTN>
  );
};
