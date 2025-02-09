import { useState } from "react";
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";

export default function Form() {
    const [formData, setFormData] = useState({
        color: "",
        spendTime: [],
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

        if (inputType === "checkbox" && inputName === "spendTime") {
            const updatedSpentTime = inputChecked
            ? [ ...formData.spendTime, inputValue] : formData.spendTime.filter((time) => time !== inputValue);
            setFormData({...formData, spendTime: updatedSpentTime});
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
            spendTime: [],
            review: "",
            username: "",
            email: ""
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtons formData={formData} handleChange={handleChange}/>
            </div>
            <div className="form__group">
                <Checkboxes formData={formData} handleChange={handleChange}/>
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