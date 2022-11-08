import { AiOutlineClose } from 'react-icons/ai'
import Dropdown from '../Dropdown/Dropdown'
import './AddNewModal.css'

const AddNewModal = ({
  title,
  data,
  metricOptions,
  handleClose,
  handleChange,
  handleAdd,
  handleClear,
}) => {
  return (
    <div className="modal-container">
      <form onSubmit={handleAdd} className="modal-form-container">
        <div className="modal-header">
          <h2>Add New {title}</h2>
          <button className="close-btn" onClick={handleClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="modal-inputs">
          <div className="modal-input-group">
            <Dropdown
              id={'metric'}
              label={'Metric'}
              placeholder={'Select a metric'}
              data={metricOptions}
              value={data.metric}
              handleChange={handleChange}
            />
          </div>
          <div className="modal-input-group">
            <label htmlFor="goal">Goal</label>
            <input type="text" name="goal" value={data.goal} onChange={handleChange} id="goal" />
          </div>
          <div className="modal-input-group">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" value={data.date} onChange={handleChange} id="date" />
          </div>
        </div>
        <div className="modal-btns">
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
          <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewModal
