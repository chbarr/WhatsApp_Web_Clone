import React from 'react'
import './ChatSearcher.css'
function ChatSearcher(props) {
    return (
        <section className='searcher-container'>
            <div className='searcher-container-input'>
                <button></button>
                <input
                    placeholder='Busca un chat o inicia uno nuevo.'
                    value={props.searchValue}
                    onChange={(event) => { props.setSearchValue(event.target.value) }}
                />

            </div>
            <button>
            </button>
        </section>
    )
}

export { ChatSearcher }
