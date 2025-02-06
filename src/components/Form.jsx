import { useState } from "react";
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";

export default function Form() {
    const [formData, setFormData] = useState({
        color: "",
        spentTime: [],
        review: "",
        username: "",
        email: ""
    });

    console.log("formData", {formData});

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue =  event.target.value;
        const inputType = event.target.type;
        const inputChecked = event.target.checked;

        console.log({inputName, inputValue, inputType});

        if (inputName === "color") {
            setFormData({ ...formData, color: inputValue});
        }

        if (inputType === "checkbox" && inputName === "spentTime") {
            setFormData({ ...formData, spentTime: inputChecked});
        }

        if (inputName === "review") {
            setFormData({ ...formData, review: inputValue});
        }

        if (inputName === "username") {
            setFormData({ ...formData, username: inputValue});
        }

        if (inputName === "email") {
            setFormData({ ...formData, email: inputValue});
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted:", {formData});
        setFormData({
            color: "",
            spentTime: [],
            review: "",
            username: "",
            email: ""
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            {/* <div className="form__group">
                <h3>What would you say are the best features of your rubber duck</h3>
                {<Checkboxes className="best_features"/>}
                <h3>What would you say are the worst bits of your rubber duck</h3>
                {<Checkboxes className="worst-bits"/>}
            </div> */}
            <div className="form__group radio">
                {/*<h3>How do you rate your rubber duck consistency?</h3>
                {<RadioButtons />}*/}
                <h3>How do you rate your rubber duck colour?</h3>
                {/*<RadioButtons />*/}
                <ul>
                  <li>
                    <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={formData.color === "1"}/>
                    <label htmlFor="color-one">1</label>
                  </li>
                  <li>
                    <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={formData.color === "2"}/>
                    <label htmlFor="color-two">2</label>
                  </li>
                  <li>
                    <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} checked={formData.color === "3"}/>
                    <label htmlFor="color-three">3</label>
                  </li>
                  <li>
                    <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={formData.color === "4"}/>
                    <label htmlFor="color-four">4</label>
                  </li>
                </ul>
                {/*<h3>How do you rate your rubber duck logo?</h3>
                {<RadioButtons />}*/}
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                {/*<Checkboxes />*/}
                <ul className="spend-time">
                  <li>
                    <label><input name="spend-time" type="checkbox" value="swimming" onChange={handleChange} checked={formData.spentTime}/>Swimming</label>
                  </li>
                  <li>
                    <label><input name="spend-time" type="checkbox" value="bathing" onChange={handleChange} checked={formData.spentTime}/>Bathing</label>
                  </li>
                  <li>
                    <label><input name="spend-time" type="checkbox" value="chatting" onChange={handleChange} checked={formData.spentTime}/>Chatting</label>
                  </li>
                  <li>
                    <label><input name="spend-time" type="checkbox" value="noTime" onChange={handleChange} checked={formData.spentTime}/>I dont like to spend time with it</label>
                  </li>
                </ul>
            </div>
            <label htmlFor="review">What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
                onChange={handleChange}
                value={formData.review}
                ></textarea>
            </label>
            <label htmlFor="username">Put your name here if you feel like it:<input
                type="text"
                name="username"
                onChange={handleChange}
                value={formData.username} />
            </label>
            <label htmlFor="email">Leave us your email pretty please??<input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email} />
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    );
}