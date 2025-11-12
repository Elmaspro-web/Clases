

class Task
{
    constructor(title, description, priority, done = false)
    {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.done = done;
        this.id = Date.now();
        this.createAt = new Date().toLocaleDateString();
    }
}

export {Task};