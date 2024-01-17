"use client";

import React, { FC, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { status } from "@/app/utils";
import { lstat } from "fs";

type PropsType = {
  board: {
    id: string;
    title: string;
    hasBtn: boolean;
    tasks: {
      id: string;
      name: string;
      priority: string;
      author: string;
      isStatus: string;
    }[];
  };
  handleOpen?: () => void;
};

const [open, setOpen] = useState(false);
const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

const Board: FC<PropsType> = ({ board, handleOpen }) => {
  return (
    <Droppable droppableId={"droppable-" + board.id}>
      {(provided) => (
        <div
          className=" w-1/4 rounded-lg border-2 border-slate-950 h-2/3 bg-slate-100   "
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="flex justify-around mt-2 border-b-2 border-slate-950">
            <h1 className="text-xl font-semibold ">{board.title}</h1>
            {board.hasBtn && (
              <button className=" flex justify-center items-center w-7 h-7 rounded-full bg-green-600 mb-1 border border-slate-950 ">
                +
              </button>
            )}
          </div>
          {board?.tasks.map((task, i) => (
            <Draggable key={i} draggableId={task.id} index={i}>
              {(provided, snapshot) => (
                <div
                  className={`card bg-base-100 w-full  shadow-xl my-5 p-5`}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                >
                  <div className="card-body">
                    <div className="flex justify-center items-center">
                      <h2 className="card-title">{task.name}</h2>
                      <span
                        className={`badge badge-${
                          status[task.priority]
                        } badge-outline ml-5`}
                      >
                        {task.priority}
                      </span>
                    </div>
                    <div className="flex flex-col items-start mt-2">
                      <p className="">
                        Author: <span className="ml-5 ">Name</span>
                      </p>
                      <p className="">
                        Date: <span>2024-01-11</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Board;
