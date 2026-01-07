export class Stage{
    constructor(stageId,name,state,start,end){
        this.stageId = stageId
        this.name = name
        this.state = state
        this.dependsOn = []
        this.timeWindow = {start:start,end:end}
    }

    addStage(stage){
        this.dependsOn.push(stage)
    }
}