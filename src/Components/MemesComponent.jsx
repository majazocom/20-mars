import { useState } from 'react';
import memes from '../assets/data.json';
import MemeCard from './MemeCard';

function MemesComponent() {
    const [memeList, setMemeList] = useState(memes.memes);
    return (
        <article className="memes-wrapper">
            <h3>Memes:</h3>
            <section className="memes-container">
                {/* mappa ut våra memes från data.json */}
                {memeList.map((meme, i, memes) => <MemeCard data={meme} key={i} onSave={setMemeList} memes={memes} />)}
            </section>
        </article>
    )
}

export default MemesComponent;