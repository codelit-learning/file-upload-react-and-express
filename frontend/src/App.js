import { createRef } from 'react';
import './App.css';

function App() {
    const fileInput = createRef();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("avatar", fileInput.current.files[0]);

        try {
            const response = await fetch('/profile', {
                method: "POST",
                body: formData 
            });

            const parsedResponse = await response.json();
            if (response.ok) {
                alert("File uploaded");
            } else {
                console.error("Some error occurred");
            }
        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input type="file" name="avatar" ref={fileInput} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default App;
