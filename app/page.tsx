"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask() {
    if (!task.trim()) return;

    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-3xl font-bold">我的第一个Vercel项目 Test</h1>

        <div className="mb-6 flex gap-2">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
            placeholder="输入任务..."
            className="flex-1 rounded-lg border bg-white px-4 py-2"
          />

          <button
            onClick={addTask}
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            添加
          </button>
        </div>

        <div className="space-y-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
            >
              <span>{task}</span>

              <button
                onClick={() => deleteTask(index)}
                className="text-red-500"
              >
                删除
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
