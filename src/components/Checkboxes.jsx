
function Checkboxes() {
    return (
        <div>
          <ul className="spend-time">
            <li>
                <label><input name="spend-time" type="checkbox" value="swimming" />Swimming</label>
            </li>
            <li>
                <label><input name="spend-time" type="checkbox" value="bathing" />Bathing</label>
            </li>
            <li>
                <label><input name="spend-time" type="checkbox" value="chatting" />Chatting</label>
            </li>
            <li>
                <label><input name="spend-time" type="checkbox" value="noTime" />I dont like to spend time with it</label>
            </li>
          </ul>
          {/*<ul className="best-features">
            <li>
                <label><input name="best-features" type="checkbox" value="yellow" />Its yellow</label>
            </li>
            <li>
                <label><input name="best-features" type="checkbox" value="squeaks" />It squeaks</label>
            </li>
            <li>
                <label><input name="best-features" type="checkbox" value="logo" />It has a logo</label>
            </li>
            <li>
                <label><input name="best-features" type="checkbox" value="big" />Its big</label>
            </li>
          </ul>
          <ul className="worst-bits">
            <li>
                <label><input name="worst-bits" type="checkbox" value="yellow" />Its yellow</label>
            </li>
            <li>
                <label><input name="worst-bits" type="checkbox" value="squeaks" />It squeaks</label>
            </li>
            <li>
                <label><input name="worst-bits" type="checkbox" value="logo" />It has a logo</label>
            </li>
            <li>
                <label><input name="worst-bits" type="checkbox" value="big" />Its big</label>
            </li>
          </ul>*/}
        </div>
    )
}

export default Checkboxes