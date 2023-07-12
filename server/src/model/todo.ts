import mongoose from 'mongoose';

interface ITodo {
    title: string;
    description: string;
};

// tell typescript the function is in the model
interface todoModelInterface extends mongoose.Model<any> {
    build(attr: ITodo): any
};

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// attach the build function to the statics property of the schema
todoSchema.statics.build = (attr: ITodo) => {
    return new Todo(attr)
};

const Todo = mongoose.model<any, todoModelInterface>('Todo', todoSchema);

export { Todo };
