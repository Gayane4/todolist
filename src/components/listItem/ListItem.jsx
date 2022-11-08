import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.scss'


const ListItem = ({id,title,details,setDetails,number}) => {
    const [edit, setEdit] = useState('')
    const [value, setValue] = useState('')
    function changeItem(id, title) {
        setEdit(id)
        setValue(title)
    }
    function saveItem(id) {
        let newData = details.map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
            
        })
        setDetails(newData)
        setEdit('')
    }
    function noChangeItem(id) {
        details.map(item => {
            if (item.id === id) {
                setValue(item.title)
            }
            return value
        })
        setEdit('')
    }
    function deleteItem(id){
      let newDat = details.filter(item => item.id !== id)
      setDetails(newDat)
    }
    return (

            <div className={style.listItem} key={id}>
              <div className={style.listItemBlock}>
              <p>{number}</p>
              {edit === id? <input onChange={(e)=> setValue(e.target.value)} value={value}/> : <h2>{title}</h2>}
              </div>
              {edit === id
                ? <div className={style.buttons}>
                  <button onClick={() => saveItem(id)} className={style.changeBtn}><FontAwesomeIcon icon={faCheck} /></button>
                  <button onClick={() => noChangeItem(id)} className={style.changeBtn}>X</button>
                </div>
                : <div className={style.buttons}>
                  <button onClick={() => changeItem(id, title)} className={style.changeBtn}><FontAwesomeIcon icon={faPen} /></button>
                  <button onClick={() => deleteItem(id)} className={style.changeBtn}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
              }


            </div>
          )}

    

export default ListItem