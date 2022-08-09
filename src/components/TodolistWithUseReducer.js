import { useReducer, useState } from "react";
import { Center, Input, TextInput, Button, Modal, Menu } from "@mantine/core";
import { BiSearch, BiTrash, BiPlus } from "react-icons/bi";
import { HiDotsVertical, HiTrash } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

const todoslistReducer = () => {};

const TodolistWithUseReducer = () => {
    const [todosList, todosListDispatch] = useReducer(todoslistReducer, {
        todosList: [],
        todosId: 0,
    });

    const [modal, setModal] = useState(false);
    return (
        <>
            <Modal
                opened={modal}
                onClose={() => {
                    setModal(false);
                }}
                centered
            >
                <Input.Wrapper label={<h2>Add new todos </h2>}>
                    <TextInput />
                    <Button style={{ marginTop: 10 }}>Add todos</Button>
                </Input.Wrapper>
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
                <li
                    style={{
                        margin: "5px auto",
                        width: "500px",
                        backgroundColor: "whitesmoke",
                        padding: "10px",
                        border: "1px solid gainsboro",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <h4>Dave</h4>
                    <div>
                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <button className="more">
                                    {" "}
                                    <HiDotsVertical />
                                </button>
                            </Menu.Target>

                            <Menu.Dropdown>
                            <Menu.Item color={"green"} icon={<CgProfile />}>
                                   Complete
                                </Menu.Item>
                                <Menu.Item color={"blue"} icon={<CgProfile />}>
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
            </ul>
        </>
    );
};

export default TodolistWithUseReducer;
