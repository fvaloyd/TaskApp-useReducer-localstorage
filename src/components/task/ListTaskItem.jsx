import PropTypes from 'prop-types';


export const ListTaskItem = ({ tasks, handleDelete, handleToggle }) => {
    return (
        <>
            {
                tasks.map(( task, i ) => (
                    <li key={task.id} className="mt-2 d-flex flex-row justify-content-between list-group-item align-items-center">
                        <p className={`align-self-center ${task.done && 'complete'}`} onClick={() => handleToggle(task.id)}>{i + 1} {task.desc}</p>
                        <div>
                            <button className='btn btn-danger m-2' onClick={() => handleDelete(task.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))
            }
        </>
    )
}

ListTaskItem.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}
