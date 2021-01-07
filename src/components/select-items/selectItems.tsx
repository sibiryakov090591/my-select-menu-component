import React, {useState} from 'react';
import styles from './selectItems.module.css';

type SelectItemsType = {
    titles: Array<string>
    callback: (s: string) => void
    activeTitle: string
    setIsCollapsed: () => void
}

export const SelectItems: React.FC<SelectItemsType> = (props) => {

    const [activeItem, setActiveItem]  = useState(props.activeTitle)

    const setTitle = (item: string) => {
        setActiveItem(item)
        props.callback(item)
        props.setIsCollapsed()
    }

    const onMouseEnterFunc = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setActiveItem(e.currentTarget.text)
    }

    const onEnterPress = (event: React.KeyboardEvent<HTMLAnchorElement>, item: string) => {
        if (event.key === "Enter") {
            setActiveItem(item)
            props.callback(item)
            props.setIsCollapsed()
        }
        if (event.key === "Escape") {
            props.setIsCollapsed()
        }
        if (event.key === "ArrowDown") {
            //
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
                              onKeyUp={(e) => onEnterPress(e, i)}
                              key={i}>{i}</a>
                })
            }
        </div>
    )
}