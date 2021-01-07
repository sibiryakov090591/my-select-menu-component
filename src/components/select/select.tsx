import React, {useState} from 'react';
import styles from './select.module.css';
import {SelectItems} from "../select-items/selectItems";

export type SelectPropsType = {
    titles: Array<string>
}

export const Select: React.FC<SelectPropsType> = (props) => {

    const [title, setTitle] = useState<string>("Your city");
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const setCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    const setCityTitle = (newTitle: string) => {
        setTitle(newTitle)
    }

    const onEnterPress = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
        if (event.key === "Enter") {
            setIsCollapsed(!isCollapsed)
        }
        if (event.key === "ArrowDown") {
            setIsCollapsed(true)
            //
        }
    }

    return (
        <div className={styles.wrapper}>
            <h3 tabIndex={1} className={styles.title}
                onClick={setCollapse}
                onKeyUp={(e) => {
                    onEnterPress(e)
                }}>{title}</h3>
            <div className={styles.arrow_wrapper}
                 onClick={setCollapse}>
                <div className={styles.arrow_1}></div>
                <div className={styles.arrow_2}></div>
            </div>
            {
                isCollapsed && <SelectItems titles={props.titles}
                                            callback={setCityTitle}
                                            setIsCollapsed={setCollapse}
                                            activeTitle={title}/>
            }
        </div>
    )
}