import React from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncel from '../Uncel/Uncel';

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section>
                <Father></Father>
                <Uncel></Uncel>
                <Anty></Anty>
            </section>
        </div>
    );
};

export default Grandpa;