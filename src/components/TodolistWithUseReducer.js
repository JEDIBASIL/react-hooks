import { useReducer, useState } from "react";
import { Center, Input, TextInput, Button, Modal, Menu } from "@mantine/core";
import { BiSearch, BiTrash, BiPlus } from "react-icons/bi";
import { HiDotsVertical, HiTrash } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

const todoslistReducer = (todos, actions) => {
    switch (actions.type) {
        case "ADD_TODOS":
            return {
                todosList: [
                    actions.payload,
                    ...todos.todosList,
                ],
                todosName: todos.todosName,
                todosId: todos.todosId,
            }
        case "ADD_TODOS_NAME":
            return {
                todosList: todos.todosList,
                todosName: (todos.todosName = actions.payload),
                todosId: todos.todosId,
            };


        default:
            return todos;
    }
};

const liStyle = {
    margin: "5px auto",
    width: "500px",
    backgroundColor: "whitesmoke",
    padding: "10px",
    border: "1px solid gainsboro",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
};
const TodolistWithUseReducer = () => {
    const [todosList, todosListDispatch] = useReducer(todoslistReducer, {
        todosList: [],
        todosName: "sdf",
        todosId: 0,
    });

    // console.log(todosList);

    const [modal, setModal] = useState(false);



    const onSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
        todosListDispatch({
            type: "ADD_TODOS",
            payload: {
                id: Date.now(),
                name: todosList.todosName,
                status: false,
            },
        });
    };

    console.log(todosList);

    return (
        <>
            <Modal
                opened={modal}
                onClose={() => {
                    setModal(false);
                }}
                centered
            >
                <form onSubmit={onSubmit}>
                    <Input.Wrapper label={<h2>Add new todos </h2>}>
                        <TextInput
                            name="name"
                            onChange={(e) => {
                                todosListDispatch({
                                    type: "ADD_TODOS_NAME",
                                    payload: e.target.value,
                                });
                            }}
                            value={todosList.todosName}
                        />
                        <Button type={"submit"} style={{ marginTop: 10 }}>
                            Add todos
                        </Button>
                    </Input.Wrapper>
                </form>
            </Modal>
            <Center
                style={{
                    padding: "20px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                }}
            >
                <h1>Todos</h1>
                <div
                    style={{
                        width: "300px",
                    }}
                >
                    <Input
                        width={"250px"}
                        icon={<BiSearch />}
                        placeholder={"Search todos"}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: 20,
                    }}
                >
                    <Button leftIcon={<BiTrash />} color={"red"}>
                        Delete todos
                    </Button>
                    <Button
                        leftIcon={<BiPlus />}
                        onClick={() => {
                            setModal(true);
                        }}
                    >
                        Add todos
                    </Button>
                </div>
            </Center>
            <ul
                style={{
                    margin: "auto",
                    width: "500px",
                    listStyle: "none",
                }}
            >
                {todosList.todosList.map(todos => 
                    <li style={liStyle} key={todos.id}>
                        {console.log(todos.name)}
                        <h4>{todos.name}</h4>
                        <div>
                            <Menu shadow="md" width={200}>
                                <Menu.Target>
                                    <button className="more">
                                        {" "}
                                        <HiDotsVertical />
                                    </button>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item
                                        color={"green"}
                                        icon={<CgProfile />}
                                    >
                                        Complete
                                    </Menu.Item>
                                    <Menu.Item
                                        color={"blue"}
                                        icon={<CgProfile />}
                                    >
                                        Edit
                                    </Menu.Item>
                                    <Menu.Item icon={<HiTrash />} color={"red"}>
                                        Delete
                                    </Menu.Item>

                                    {/* Other items ... */}
                                </Menu.Dropdown>
                            </Menu>
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
};

export default TodolistWithUseReducer;
