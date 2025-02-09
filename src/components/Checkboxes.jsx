import PropTypes from "prop-types";

function Checkboxes({formData, handleChange}) {
    return (
          <ul className="spend-time">
            <li>
                <label><input name="spendTime" type="checkbox" value="swimming" onChange={handleChange} checked={formData.spendTime.includes("swimming")}/>Swimming</label>
            </li>
            <li>
                <label><input name="spendTime" type="checkbox" value="bathing" onChange={handleChange} checked={formData.spendTime.includes("bathing")}/>Bathing</label>
            </li>
            <li>
                <label><input name="spendTime" type="checkbox" value="chatting" onChange={handleChange} checked={formData.spendTime.includes("chatting")}/>Chatting</label>
            </li>
            <li>
                <label><input name="spendTime" type="checkbox" value="noTime" onChange={handleChange} checked={formData.spendTime.includes("noTime")}/>I dont like to spend time with it</label>
            </li>
          </ul>
    );
}

Checkboxes.propTypes = {
    formData: PropTypes.shape({
        spendTime: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    handleChange:PropTypes.func.isRequired,
};

export default Checkboxes