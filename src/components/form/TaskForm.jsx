
import { useForm } from '../../hooks/useForm';

export const TaskForm = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange,, resetForm] = useForm({
        description: ''
    }); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim() <= 1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddTodo( newTodo );
        resetForm();
    }

    return (
        <div className="col-5">
            <h4>Add Task</h4>
            <hr />

            <form className='form-group' onClick={handleSubmit}>
                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Task desciption'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange}
                />
                <button type='submit' className='btn btn-outline-primary mt-1 btn-block form-control'>
                    Add Task
                </button>
            </form>
        </div>
    )
}
