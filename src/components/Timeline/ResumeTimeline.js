import React from 'react';
// material ui: timeline
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeperator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// material ui
import { Typography } from '@material-ui/core';
// css
import '../../css/timeline.css';

const ResumeTimeline = () => {
    return (
        <Timeline className={"timeline"}>
            {/* first item */}
            <TimelineItem className={"timeline_container first-item"}>
                <TimelineSeperator>
                    <TimelineDot className={"timeline_header"}/>
                    <TimelineConnector />
                </TimelineSeperator>
                <TimelineContent><Typography variant="h6" className="">Apple</Typography></TimelineContent>
            </TimelineItem>
            {/* items in the middle */}
            <TimelineItem className={"timeline_container"}>
                <TimelineSeperator>
                    <TimelineDot className={"timeline_dot"}/>
                    <TimelineConnector />
                </TimelineSeperator>
                <TimelineContent>Banana</TimelineContent>
            </TimelineItem>
            {/* last item */}
            <TimelineItem className={"timeline_container last-item"}>
                <TimelineSeperator>
                    <TimelineDot className={"timeline_dot"}/>
                </TimelineSeperator>
                <TimelineContent>Cherry</TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default ResumeTimeline;