import React, { useState, useRef } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import { BsFolderMinus } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
} from "react-beautiful-dnd";

const Card = ({ data }) => {
  return (
    <div className="kanbanCard">
      <span className="menu">
        <h2>{data.severity}</h2>
        <span className="dots"></span>
      </span>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <span className="extras">
        <span className="avatars"></span>
        <span className="comment">
          <BiCommentDots />
          &nbsp;&nbsp;&nbsp;
          {`${data.comments} comments`}
        </span>
        <span className="file">
          <BsFolderMinus />
          &nbsp;&nbsp;&nbsp;
          {`${data.files} files`}
        </span>
      </span>
    </div>
  );
};

const Kanban = ({ sidebarOpen }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState({
    toDo: [
      {
        id: "1",
        severity: "Low",
        title: "Brainstorming",
        description:
          "Brainstorming brings team members' diverse experience into play.",
        comments: 12,
        files: 0,
      },
      {
        id: "2",
        severity: "High",
        title: "Research",
        description:
          "User research helps you to create an optimal product for users.",
        comments: 10,
        files: 3,
      },
      {
        id: "3",
        severity: "High",
        title: "Wireframes",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
        comments: 12,
        files: 0,
      },
    ],
    inProgress: [
      {
        id: "4",
        severity: "High",
        title: "Wireframes",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
        comments: 12,
        files: 0,
      },
    ],
    done: [
      {
        id: "5",
        severity: "High",
        title: "Wireframes",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
        comments: 12,
        files: 0,
      },
    ],
  });

  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      console.log(result);
      return;
    }
    const listCopy = { ...list };
    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setList(listCopy);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className="kanban_container"
        style={{
          paddingLeft: sidebarOpen ? "250px" : "0px",
        }}
      >
        <Droppable droppableId="toDo" onDragEnd={onDragEnd}>
          {(provided, snapshot) => (
            <div className="kanban_box" ref={provided.innerRef}>
              <div className="topsection">
                <span>
                  <span className="indicator-todo"></span>
                  <h1>To Do</h1>
                  <span className="circle_num_todo">4</span>
                </span>
                <span className="icon">
                  <RiAddBoxLine />
                </span>
              </div>
              <hr className="hrline-todo" />
              <div className="Cards">
                {list.toDo.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id + ""}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card data={item} />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="inProgress" onDragEnd={onDragEnd}>
          {(provided, snapshot) => (
            <div className="kanban_box" ref={provided.innerRef}>
              <div className="topsection">
                <span>
                  <span className="indicator-progress"></span>
                  <h1>On progress</h1>
                  <span className="circle_num">3</span>
                </span>
                <span className="icon">
                  <RiAddBoxLine />
                </span>
              </div>
              <hr className="hrline-progress" />
              <div className="Cards">
                {list.inProgress.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id + ""}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card data={item} />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="done" onDragEnd={onDragEnd}>
          {(provided, snapshot) => (
            <div className="kanban_box" ref={provided.innerRef}>
              <div className="topsection">
                <span>
                  <span className="indicator-done"></span>
                  <h1>Done</h1>
                  <span className="circle_num">2</span>
                </span>
                <span className="icon">
                  <RiAddBoxLine />
                </span>
              </div>
              <hr className="hrline-done" />
              <div className="Cards">
                {list.done.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id + ""}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card data={item} />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Kanban;
