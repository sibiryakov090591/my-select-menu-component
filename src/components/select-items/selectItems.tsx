import React, {useState} from 'react';
import styles from './selectItems.module.css';

type SelectItemsType = {
    titles: Array<string>
    callback: (s: string) => void
    activeTitle: string
}

export const SelectItems: React.FC<SelectItemsType> = (props) => {

    const [activeItem, setActiveItem]  = useState(props.activeTitle)

    const setTitle = (item: string) => {
        setActiveItem(item)
        props.callback(item)
    }

    const onMouseEnterFunc = () => {
        setActiveItem("")
    }

    const onEnterPress = (event: React.KeyboardEvent<HTMLAnchorElement>, item: string) => {
        if (event.key === "Enter") {
            setActiveItem(item)
            props.callback(item)
        }
    }

    return (
        <div className={styles.wrapper}>
            {
                props.titles.map((i, index) => {
                    return <a tabIndex={index + 1}
                              className={activeItem === i ? (styles.item + " " + styles.active) : styles.item}
                              onClick={() => {setTitle(i)}}
                              onMouseEnter={onMouseEnterFunc}
                              onKeyPress={(e) => onEnterPress(e, i)}
                              key={i}>{i}</a>
                })
            }
        </div>
    )
}