import { DeleteOutline } from "@mui/icons-material";
import { Box, Button, Container, Input } from "@mui/material";
import React, { FC, useState } from "react";

export const ToDo: FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleAdd = () => {
    setTodos((prevTodos) => [...prevTodos, currentTodo]);
    setCurrentTodo("");
  };

  const handleRemove = (todo: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t !== todo);
    });
  };
  return (
    <Container>
      <h1>Welcome to your todos</h1>

      <div>
        <Input
          style={{ width: 250 }}
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>

      <div>
        {todos.map((todo) => (
          <Box
            key={todo}
            style={{
              padding: 10,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              width: 300,
            }}
          >
            <h4>{todo}</h4>

            <Button onClick={() => handleRemove(todo)}>
              <DeleteOutline />
            </Button>
          </Box>
        ))}
      </div>
    </Container>
  );
};
