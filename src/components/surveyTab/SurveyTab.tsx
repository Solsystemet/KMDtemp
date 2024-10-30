import { Box } from "lucide-react";
import React from "react";
import styles from "./SurveyTab.module.css";

type SurveyTabProps = {
    date: Date;
    company: string;
    projectName: string;
    dataProcessor: string;
    index: number;
}

export function SurveyTab (props: SurveyTabProps) {
    return(
        <div className={styles.surveyTab}>
            <div className={styles.surveyTabInfo}>
                <h2>{props.projectName}</h2>
                <p>{props.company}</p>
                <p>{props.dataProcessor}</p>
            </div>
            <p className={styles.date}>{props.date.toLocaleDateString()}</p>
            
        </div>
    )
}
