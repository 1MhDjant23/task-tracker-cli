# Task Tracker CLI 📝

A simple, robust command-line interface (CLI) application for tracking and managing your daily tasks, built with **Node.js**.

## 🚀 Features

- **Add Tasks**: Quickly add new tasks to your list.
- **List Tasks**: View all tasks with their current status (Todo, In-Progress, Done) and creation time.
- **Update Status**: effortlessly mark tasks as "In Progress" or "Done".
- **Edit Tasks**: Update the description of existing tasks.
- **Delete Tasks**: Remove tasks you no longer need.
- **Data Persistence**: All tasks are saved locally in a JSON file, so you never lose your data.
- **Interactive Menu**: User-friendly interactive command-line menu.

## 🛠️ Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** installed on your machine (version 14.x or higher recommended).
- **npm** (Node Package Manager) which usually comes with Node.js.

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/1MhDjant23/task-tracker-cli.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd task-tracker-cli
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

## 💻 Usage

To start the application, simply run:

```bash
npm start
```

Or run it directly with Node:

```bash
node src/index.js
```

### Interactive Menu

Once started, you will be presented with a menu:

```text
=== Task Tracker Menu ===
0) Exit Program
1) Add New Task
2) List All Tasks
3) Delete Task
4) Mark-Task-In-Progress
5) Mark-Task-Done
6) Update Task
Enter One Option:
```

Simply type the number of the option you wish to select and follow the on-screen prompts.

## 📂 Project Structure

```
task-tracker-cli/
├── src/
│   ├── commands/       # Implementation of individual commands (add, list, delete, etc.)
│   ├── DB/            # Database directory (contains tasks.json)
│   ├── utils/         # Helper functions (input handling, file I/O)
│   └── index.js       # Entry point of the application
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## 👤 Author

**Mohamed Ait Tajante**

- GitHub: [@1MhDjant23](https://github.com/1MhDjant23)
