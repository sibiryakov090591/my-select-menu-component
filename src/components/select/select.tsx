import React, {useState} from 'react';
import styles from './select.module.css';
import {SelectItems} from "../select-items/selectItems";

export type SelectPropsType = {
    titles: Array<string>
}

export const Select: React.FC<SelectPropsType> = (props) => {

    const [title, setTitle] = useState<string>("City");
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const setCollapse = () => {
        if (props.titles.length > 0) setIsCollapsed(!isCollapsed)
    }

    const setCityTitle = (newTitle: string) => {
        setTitle(newTitle)
        setIsCollapsed(false)
    }

    const onEnterPress = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
        if (event.key === "Enter") {
            setIsCollapsed(!isCollapsed)
        }
    }

    return (
        <div className={styles.wrapper}>
            <h3 tabIndex={1} className={styles.title}
                onClick={setCollapse}
                onKeyPress={(e) => {onEnterPress(e)}}>{title}</h3>
            {
                props.titles.length > 0 &&
                <div className={styles.arrow_wrapper}
                     onClick={setCollapse}>
                    <div className={styles.arrow_1}></div>
                    <div className={styles.arrow_2}></div>
                </div>
            }
            {
                isCollapsed && <SelectItems titles={props.titles}
                                            callback={setCityTitle}
                                            activeTitle={title}/>
            }
        </div>
    )
}