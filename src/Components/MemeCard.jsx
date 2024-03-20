import { useState } from "react";

function MemeCard({ data, onSave, memes }) {
    // Ta ut enbart de fösta 80 karaktärerna ur texten
    const shortAboutText = data.about.slice(0, 70);
    const [isShortText, setIsShortText] = useState(true);
    const [editMode, setEditMode] = useState(false);
    // states för våra meme-infon
    const [memeName, setMemeName] = useState(data.name);
    const [memeImage, setMemeImage] = useState(data.image);
    const [memeAbout, setMemeAbout] = useState(data.about);

    function handleSave() {
        // uppdatera memeList-statet i föräldern mha onSave som är setMemeList
        // uppdatera "gamla" listan med memes så vårt uppdaterade objekt ser bra ut där
        let newMemeList = memes.map(meme => {
            if (meme.id === data.id) {
                return { ...meme, name: memeName, image: memeImage, about: memeAbout }
            }
            return meme;
        });
        onSave(newMemeList);
        setEditMode(false);
    };

    return (
        <article>
            {
                editMode ?
                    <>
                        <input defaultValue={data.image} onChange={(e) => setMemeImage(e.target.value)} />
                        <input defaultValue={data.name} onChange={(e) => setMemeName(e.target.value)} />
                        <textarea defaultValue={data.about} onChange={(e) => setMemeAbout(e.target.value)} />
                        <button onClick={handleSave}>Spara</button>
                    </>
                    :
                    <>
                        <img src={data.image} alt={"The meme " + data.name} />
                        <h4>{data.name}</h4>
                        {
                            isShortText ?
                                <p>{shortAboutText}<span onClick={() => setIsShortText(false)}>...</span></p>
                                :
                                <p>{data.about}<span onClick={() => setIsShortText(true)}> show less</span></p>
                        }

                        <button onClick={() => setEditMode(true)}>Ändra</button>
                    </>
            }
        </article>
    )
};

export default MemeCard;