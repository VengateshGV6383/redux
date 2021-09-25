import React, { useState } from "react";

import InputTasks from "./InputTasks";
import TaskMenu from "./TaskMenu";
const ListItems = ({ tasklist, filter, setCompleted, addingTodos }) => {
  const [idx, setActiveIdx] = useState(null);

  const [update, setUpdate] = useState(null);
  const totalIsCompleted = (list) => {
    let count = list.filter((item) => item.isCompleted === true);
    return count.length;
  };
  const setActiveDropdown = (index) => {
    setActiveIdx(index);
  };
  const totalTask = (list) => {
    return list?.length;
  };

  return (
    <React.Fragment>
      <TaskMenu
        totaltask={totalTask(tasklist)}
        completedTask={totalIsCompleted(tasklist)}
        notCompleted={totalTask(tasklist) - totalIsCompleted(tasklist)}
      />
      {tasklist?.map((item, index) => {
        let date = `${item.date}`;
        return (
          <div
            onClick={() => setActiveDropdown(index)}
            key={item.id}
            style={{ maxHeight: "150px", margin: "1%", overflow: "auto" }}
          >
            <div className={idx === index ? "active title" : "title"}>
              <i className="dropdown icon"></i>
              <i className="info circle icon "></i>
              {`Task no : ${item.id}`}&emsp;&emsp;
              <i className="calendar icon"></i>
              {date.slice(0, 24)}
            </div>

            <div className={idx === index ? "active content" : "content"}>
              {update === index ? (
                <InputTasks
                  btnName="Update"
                  value={item}
                  handleOnClickBtn={addingTodos}
                />
              ) : (
                <div style={{ margin: "1%" }}>
                  {item.task}
                  {item.isCompleted ? (
                    <p className="ui green left pointing label">Done</p>
                  ) : (
                    <p className="ui left pointing label">Todo</p>
                  )}
                </div>
              )}

              <div>
                <p>
                  {item.isCompleted ? null : (
                    <button
                      className="ui teal button"
                      style={{ margin: "1%" }}
                      onClick={() => setUpdate(index)}
                    >
                      <i className="pencil alternate icon"></i>&nbsp;Edit
                    </button>
                  )}
                  <button
                    className="ui orange button"
                    style={{ margin: "1%" }}
                    onClick={() => filter(item.id)}
                  >
                    <i className="trash white icon"></i>&nbsp;Delete
                  </button>
                  &emsp;
                  {!item.isCompleted ? (
                    <button
                      className="ui button"
                      style={{ marigin: "1%" }}
                      onClick={() =>
                        setCompleted({
                          id: item.id,
                          task: item.task,
                          date: item.date,
                        })
                      }
                    >
                      <i className="bookmark white icon"></i>&nbsp;Completed
                    </button>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ListItems;
