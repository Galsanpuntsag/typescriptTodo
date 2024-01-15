"use client";
import React, { FC } from "react";
import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import Board from "../Board";

const Section = () => {
  const [boards, setBoards] = useState([
    {
      id: "0",
      title: "ToDo",
      hasBtn: true,
      tasks: [
        {
          id: "1",
          name: "First Tasks",
          priority: "high",
          author: "John",
          isStatus: "ToDo",
        },
        {
          id: "4",
          name: "FOurth Tasks",
          priority: "high",
          author: "John",
          isStatus: "ToDo",
        },
      ],
    },
    {
      id: 1,
      title: "Doing",
      hasBtn: false,
      tasks: [
        {
          id: "2",
          name: "Second Tasks",
          priority: "medium",
          author: "John",
          isStatus: "Doing",
        },
      ],
    },
    {
      id: 2,
      title: "Done",
      hasBtn: false,
      tasks: [
        {
          id: "3",
          name: "Third Tasks",
          priority: "low",
          author: "John",
          isStatus: "Done",
        },
      ],
    },
  ]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    //haanaas zuugduhiin FROM
    console.log("SOURCE", source);
    //haashaa zuugduhiin TO
    console.log("DESTINSA", destination);

    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      //arry-iin refrense buyu zaagch turul newDatagoor Boards avna. array hamt uurchluhiin tuld
      //stringify ni boards bugdiin string bolgood Json parse aar object bolgoj avna
      const newData = [...JSON.parse(JSON.stringify(boards))];
      const oldDroppableId = newData.findIndex(
        (el) => el.id === source.droppableId.split("-")[1]
      );

      console.log("OLD_ID", oldDroppableId);
      const newDroppableId = newData.findIndex(
        (el) => el.id === destination.droppableId.split("-")[1]
      );
      console.log("NEW_ID", newDroppableId);

      const [task] = newData[oldDroppableId]?.tasks.splice(source.index, 1);
      console.log("ITEM", task);
      newData[newDroppableId]?.tasks.splice(destination.index, 0, task);
      setBoards([...newData]);
      console.log("SET", boards);
    } else {
      const newData = [...JSON.parse(JSON.stringify(boards))];
      const droppableId = newData.findIndex(
        (el) => el.id === source.droppableId.split("-")[1]
      );
      console.log("DROP_ID", droppableId);

      const [task] = newData[droppableId].tasks.splice(source.index, 1);
      console.log("Itemm", task);
      newData[droppableId].tasks.splice(destination.index, 0, task);
      setBoards([...newData]);
    }
  };

  return (
    <section className="flex justify-around mt-10">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {boards.map((board, i) => (
          <Board board={board} key={i} handleOpen={handleOpen} />
        ))}
      </DragDropContext>
    </section>
  );
};

export default Section;
