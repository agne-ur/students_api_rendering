import React, {useState} from 'react';

function TagForm(props) {
    const [newTag, setNewTag] = useState("")
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                props.addTag(newTag, props.index);
                setNewTag("");
            }}
        >
            <input
                className="input"
                placeholder="Add a tag"
                type="text"
                value={newTag}
                onChange={e => {
                    setNewTag(e.target.value);
                }}
            />
            <input className="submit" type="submit" />
        </form>
    )
}

export default TagForm;
