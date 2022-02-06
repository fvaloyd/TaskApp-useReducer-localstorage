import PropTypes from 'prop-types';

import { ListTaskItem } from './ListTaskItem';

export const ListTask = ({ tasks, handleDelete, handleToggle }) => {
  return (
    <div className='col-6'>
        <ul className='list-grup list-grup-flush d-flex flex-column'>
            <ListTaskItem tasks={tasks} handleDelete={handleDelete} handleToggle={handleToggle} />
        </ul>
    </div>
  )
}

ListTask.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}