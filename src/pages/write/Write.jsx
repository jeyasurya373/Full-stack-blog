import "./write.css"
import { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from './../../context/Context';

export default function Write() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file);
            newPost.photo = filename;

            try {
                await axios.post("/upload", data);
            }
            catch (err) {

            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/")
        }
        catch (err) {

        }

    }
    return (
        <div className="write">
            {file && (
                <img className="wirteimage"
                    src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="writeform" onSubmit={handleSubmit}>
                <div className="writeformgroup">
                    <label htmlFor="FileInput">
                        <i className="writeicon fas fa-plus"></i>
                    </label>
                    <input type="file" id="FileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeinput" autoFocus={true} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="writeformgroup">
                    <textarea placeholder="What's on your mind?" type="text" className="writeinput writetext"
                        onChange={e => setDesc(e.target.value)}></textarea>
                </div>
                <button className="writesubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
