import { Stage } from "./Stage.js"

export class Mission {
    constructor(missionId, title, zone, priority, status) {
        this.missionId = missionId
        this.title = title
        this.zone = zone
        this.priority = priority
        this.status = status
        this.team = []
        this.stages = []
        this.createdAt = String(new Date())
    }

    addstage(stage) {
        this.stages.push(stage)
    }

    static auditMission(mission) {
        if (!mission.missionId || !mission.title || !mission.zone || !mission.priority || !mission.stages) {
            throw new Error("missing one or mor fields")
        }
        for (let stage of mission.stages) {
            if (!(stage instanceof Stage)) {
                throw new Error("stage not exist")
            }
            const start = new Date(stage.timeWindow.start).getTime()
            const end = new Date(stage.timeWindow.end).getTime()
            if (start > end) {
                throw new Error("time start canot high of end time")
            }
        }
        return true
    }
}






