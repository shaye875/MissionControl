export class Logs{
    constructor(logId,missionId,type,message,createBy){
        this.logId = logId
        this.missionId = missionId
        this.type = type
        this.message = message
        this.createBy = createBy
        this.createdAt = String(new Date())
    }
}